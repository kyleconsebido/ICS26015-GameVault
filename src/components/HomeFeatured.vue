<script setup>
import { computed, reactive, ref } from 'vue'
import { IconBrowser, IconWindows } from '@/assets/icons'
import useIsIntersecting from '@/composables/useIsIntersecting'
import useGames from '@/stores/useGames'
import useGame from '@/stores/useGame'
import scrollTop from '@/utils/scrollTop'

const fileExtensions = {
  jpg: 'jpg',
  webp: 'webp',
  png: 'png'
}

const fileExtRegExp = new RegExp(/\.(jpg|webp|png)$/)

const { state } = useGames()

const isImageEmpty = ref(true)
const isImageError = ref(false)

const element = ref(null)

const isIntersecting = useIsIntersecting(element, { threshold: 0.5 })

const featured = computed(() => {
  const date = new Date()
  const timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate()).valueOf()

  const game = state.data[timestamp % state.data?.length]

  if (game) {
    return reactive(useGame(game.id))
  }

  return null
})

const handleError = (e) => {
  const { src } = e.currentTarget

  if (Object.keys(fileExtensions).length === 0) {
    isImageError.value = true
    return
  }

  delete fileExtensions[src.match(fileExtRegExp)]

  for (const ext in fileExtensions) {
    const regex = new RegExp(`^.*\\.${ext}$`)
    const isMatch = regex.test(src)

    delete fileExtensions[ext]

    if (!isMatch) {
      e.currentTarget.src = src.replace(fileExtRegExp, `.${ext}`)
      break
    }
  }
}
</script>

<template>
  <section :ref="(el) => (element = el)" :class="{ hide: !isIntersecting }" class="app-container">
    <RouterLink
      :to="`/games/${featured?.data?.id}`"
      class="featured"
      :class="{ empty: isImageEmpty || !featured?.data || featured?.loading }"
      @click="scrollTop"
    >
      <img
        v-if="!isImageError"
        :src="`https://www.freetogame.com/g/${featured?.data?.id}/background.jpg`"
        @error="handleError"
        @load="isImageEmpty = false"
      />
      <img v-else :src="featured?.data?.thumbnail" />
      <div class="content">
        <span class="title">FEATURED</span>
        <h1 lang="en" class="section-title">{{ featured?.data?.title }}</h1>
        <div class="tags">
          <span class="platform">
            <IconWindows v-if="featured?.data?.platform?.includes?.('Windows')" />
            <IconBrowser v-if="featured?.data?.platform?.includes?.('Web Browser')" />
          </span>
          <span class="genre">{{ featured?.data?.genre }}</span>
        </div>
        <div class="descriptions">
          <p>{{ featured?.data?.short_description }}</p>
          <p>{{ featured?.data?.description }}</p>
        </div>
      </div>
    </RouterLink>
  </section>
</template>

<style scoped>
section {
  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
    width: auto;
  }
}

.hide .featured {
  opacity: 0;
  translate: 0 1em;
  scale: 0.95;
}

.featured {
  position: relative;
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  margin: 0;
  overflow: hidden;
  display: grid;
  text-decoration: none;

  transform-origin: center;
  transition:
    500ms opacity 200ms,
    500ms scale 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    500ms translate 200ms;

  @media (max-width: 480px) {
    border-radius: 0;
    border: none;
  }
}

.featured.empty {
  padding-top: 56.25%; /** 16:9 */
}

.featured.empty img {
  display: none;
}

.featured img {
  user-select: none;
  width: 100%;
  max-height: 80vh;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: auto;
    min-height: 600px;
    width: 100%;
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    width: clamp(300px, 100vw, 1280px);
  }
}

.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at top left,
    var(--black-2) 15%,
    color-mix(in srgb, var(--black-2) 80%, transparent)
  );
  backdrop-filter: blur(3px);
  z-index: 0;
  transition: 200ms opacity ease-in-out;
}

.featured:hover .content::before {
  backdrop-filter: none;
  opacity: 0.8;
}

.content > * {
  z-index: 1;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: var(--red);
}

.section-title {
  translate: -10px 0;
  color: var(--white);
  word-break: break-word;
  hyphens: auto;
}

.tags {
  display: flex;
  align-items: center;
  gap: 1em;
  color: var(--white);
}

.platform {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.descriptions {
  position: relative;
  margin-top: 1.5em;
  color: var(--color-text-dark);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.descriptions p {
  margin-bottom: 1em;
}
</style>
