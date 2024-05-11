import{_ as E,B as O,j as T,c as n,d as a,e as s,k as e,t as o,F as z,y as A,g as l,p as H,i as J}from"./index-5vFYNv1A.js";import{u as K}from"./useGame-Cqy3PvU3.js";const i=r=>(H("data-v-8872624d"),r=r(),J(),r),Q={class:"app-container"},U={key:0},W={key:1},X={key:2,class:"grid-container"},Y={class:"image-grid"},Z=["src"],$=["src"],ss={class:"info-container"},es=["src"],ts={class:"details"},os=["href"],is={class:"description"},ns={class:"system-requirements"},as=i(()=>s("h2",null,"System Requirements",-1)),ls={class:"requirement-card"},rs=i(()=>s("h3",null,"Minimum",-1)),cs=i(()=>s("span",null,"OS:",-1)),_s=i(()=>s("span",null,"Processor:",-1)),us=i(()=>s("span",null,"Memory:",-1)),ds=i(()=>s("span",null,"Graphics:",-1)),ms=i(()=>s("span",null,"Storage:",-1)),hs={__name:"GameView",setup(r){const F=O(),c=T(),{data:t,loading:L,error:M}=K(F.params.id),j=()=>{c.options.routes.some(u=>u.path===c.options.history.state.back)?c.back():c.push("/games")};return(_,u)=>{var d,m,h,p,g,v,y,k,f,b,w,q,G,R,S,V,B,D,I,x,C,N;return n(),a("main",Q,[s("button",{class:"back-button",onClick:j},"Return"),e(L)?(n(),a("div",U,"Loading")):e(M)?(n(),a("div",W,o(_.state.error),1)):(n(),a("div",X,[s("div",Y,[s("img",{alt:"Game Cover",class:"game-cover",src:(d=e(t))==null?void 0:d.thumbnail,height:"225",width:"400"},null,8,Z),(n(!0),a(z,null,A((m=e(t))==null?void 0:m.screenshots,P=>(n(),a("img",{key:P.id,class:"game-screenshot",src:P.image,height:"225",width:"400"},null,8,$))),128))]),s("div",ss,[s("img",{alt:"Game Cover",class:"game-cover",src:(h=e(t))==null?void 0:h.thumbnail,height:"150",width:"300"},null,8,es),s("h1",null,o((p=e(t))==null?void 0:p.title),1),s("p",null,o((g=e(t))==null?void 0:g.short_description),1),s("div",ts,[s("p",null,"Genre: "+o((v=e(t))==null?void 0:v.genre),1),s("p",null,"Platform: "+o((y=e(t))==null?void 0:y.platform),1),s("p",null,"Publisher: "+o((k=e(t))==null?void 0:k.publisher),1),s("p",null,"Developer: "+o((f=e(t))==null?void 0:f.developer),1),s("p",null,"Release Date: "+o((b=e(t))==null?void 0:b.release_date),1)]),s("a",{href:(w=e(t))==null?void 0:w.game_url,target:"_blank",class:"download-link"},"Download Now",8,os)]),s("div",is,[s("p",null,o((q=e(t))==null?void 0:q.description),1)]),s("div",ns,[as,s("div",ls,[rs,s("ul",null,[s("li",null,[cs,l(" "+o((R=(G=e(t))==null?void 0:G.minimum_system_requirements)==null?void 0:R.os),1)]),s("li",null,[_s,l(" "+o((V=(S=e(t))==null?void 0:S.minimum_system_requirements)==null?void 0:V.processor),1)]),s("li",null,[us,l(" "+o((D=(B=e(t))==null?void 0:B.minimum_system_requirements)==null?void 0:D.memory),1)]),s("li",null,[ds,l(" "+o((x=(I=e(t))==null?void 0:I.minimum_system_requirements)==null?void 0:x.graphics),1)]),s("li",null,[ms,l(" "+o((N=(C=e(t))==null?void 0:C.minimum_system_requirements)==null?void 0:N.storage),1)])])])])]))])}}},vs=E(hs,[["__scopeId","data-v-8872624d"]]);export{vs as default};