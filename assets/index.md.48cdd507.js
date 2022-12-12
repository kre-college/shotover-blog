import{_ as x,e as u,o as n,c as l,b as s,t as o,d as g,F as a,f as _,g as r,h as b,n as m,i as d,r as w,a as h}from"./app.36ced140.js";const k="/shotover-blog/landing/arrow_right.png",O="/shotover-blog/landing/arrow_right_black.png",D="/shotover-blog/landing/roadmap.png",T={data(){return{config:{},selectedDeployOption:0}},mounted(){u(()=>import("./chunks/config.fb8c1b8a.js"),["assets/chunks/config.fb8c1b8a.js","assets/app.36ced140.js"]).then(i=>{this.config=i.default.pagesConfig.landing})},methods:{onScroll(i){const p=this.$refs.roadmapContainer;if(i.deltaY>0?i.view.pageYOffset+i.deltaY>=5640&&i.view.pageYOffset-i.deltaY<=5660:i.view.pageYOffset-i.deltaY>=5640&&i.view.pageYOffset+i.deltaY<=5660){if(p.scrollLeft+window.innerWidth===2900&&i.deltaY>0||p.scrollLeft===0&&i.deltaY<=0){document.getElementsByTagName("body")[0].classList.remove("no-scroll-y");return}document.getElementsByTagName("body")[0].classList.add("no-scroll-y"),p.scrollLeft+=i.deltaY,i.preventDefault()}}}},L={class:"w-100 f-left mb-18"},S={class:"w-55 f-left mt-5 pl-130"},Y={class:"shotover-title w-100 f-left"},N={class:"shotover-subtitle w-100 f-left"},P={style:{color:"#91AAE5"}},A={style:{color:"#AADEF6"}},C={class:"shotover-motto w-100 f-left"},E=["href"],V={class:"landing-action-btn-text"},B={class:"w-45 f-left landing-title-img"},M=["src"],F={class:"w-100 f-left p-130 mb-24"},H={class:"w-43 f-left"},I={class:"landing-description-title"},z={class:"w-57 f-left"},R={class:"landing-description mt-1"},W={class:"w-100 f-left mb-22"},j=["innerHTML"],J={class:"docs-container w-100 f-left p-105"},q=["href"],G={class:"w-100 f-left doc-name mb-2"},K={class:"text-left doc-desc"},Q=s("div",{class:"f-left doc-action-btn mb-2"},[s("p",{class:"f-left"},"Learn more"),s("img",{class:"f-left doc-arrow",src:k})],-1),U={class:"w-100 f-left p-130 landing-problems"},X=["innerHTML"],Z={class:"w-65 mb-8 problems-description"},$={class:"w-100 f-left p-90 mb-2"},ss={class:"f-left w-80"},es=["src"],ts={class:"w-50 problems-description"},os=b('<div class="w-100 f-left mb-8 p-130 landing-proxy"><h2 class="landing-proxy-title"> Shotover Proxy </h2><div class="proxy-item" style="top:280px;left:-109px;">pscale connect</div><div class="proxy-item" style="top:280px;left:160px;">pscale disconnect</div><div class="proxy-item" style="top:375px;left:-7px;">pscale service token</div><div class="proxy-item" style="top:460px;left:-7px;">pscale connect</div><div class="proxy-item" style="top:555px;left:-109px;">pscale connect</div><div class="proxy-item" style="top:555px;left:155px;">pscale connect</div><div class="proxy-item" style="top:260px;right:140px;">pscale disconnect</div><div class="proxy-item" style="top:260px;right:-120px;">pscale connect</div><div class="proxy-item" style="top:355px;right:-17px;">pscale service token</div><div class="proxy-item" style="top:440px;right:-17px;">pscale connect</div><div class="proxy-item" style="top:535px;right:150px;">pscale connect</div><div class="proxy-item" style="top:535px;right:-120px;">pscale connect</div></div>',1),is={class:"w-100 f-left mb-24 p-130 landing-deploy"},ns={class:"w-40 f-left"},ls={class:"landing-title mb-4"},cs={class:"landing-description mb-11"},ps={class:"w-100 f-left"},rs={class:"w-45 f-left"},ds={class:"deploy-counter mb-8"},as=["onMouseover"],_s={key:0,class:"f-right deploy-arrow",src:O},fs={class:"w-55 f-left p-50"},gs={class:"step-img-container mb-4"},ms=["src"],hs={class:"landing-description w-80"},ys={class:"w-100 f-left mb-18"},vs={class:"p-130"},xs={class:"landing-title w-100 f-left mb-2"},us={class:"w-100 f-left roadmap-container",ref:"roadmapContainer"},bs={class:"roadmap"},ws=s("img",{src:D},null,-1),ks={class:"roadmap-step-pointer"},Os={class:"name-description w-100 f-left"},Ds={class:"p-130"},Ts={class:"landing-title w-50 f-left"},Ls={class:"landing-description w-50 mt-1 mb-1 f-left"},Ss=["src"];function Ys(i,p,y,f,e,v){return e.config.title?(n(),l("div",{key:0,class:"landing w-100 f-left",onWheel:p[0]||(p[0]=t=>v.onScroll(t))},[s("div",L,[s("div",S,[s("h1",Y,o(e.config.title),1),s("h2",N,[s("span",P,o(e.config.subtitle1),1),g(),s("span",A,o(e.config.subtitle2),1)]),s("h3",C,o(e.config.motto),1),s("a",{class:"landing-action-btn",href:e.config.actionBtnLink},[s("span",V,o(e.config.actionBtnText),1)],8,E)]),s("div",B,[s("img",{class:"w-80 ml-20",src:e.config.titleImg},null,8,M)])]),s("div",F,[s("div",H,[s("h2",I,o(e.config.description.title),1)]),s("div",z,[s("p",R,o(e.config.description.text),1)])]),s("div",W,[s("h2",{class:"landing-docs-title pl-130",innerHTML:e.config.documentation.title},null,8,j),s("div",J,[(n(!0),l(a,null,_(e.config.documentation.items,t=>(n(),l("a",{key:t.link,href:t.link,class:"docs-block"},[s("h3",G,o(t.name),1),s("p",K,o(t.description),1),Q],8,q))),128))])]),s("div",U,[s("h2",{class:"landing-problems-title mb-6",innerHTML:e.config.problemsSection.title},null,8,X),s("p",Z,o(e.config.problemsSection.description1),1),s("div",$,[(n(!0),l(a,null,_(e.config.problemsSection.items,(t,c)=>(n(),l("div",{key:c,class:m(["f-left problem-card",{"mt-15":c===1}]),style:d(`background-color: ${t.color}; ${c===2?"margin-top: -150px":""}`)},[s("span",ss,o(t.description),1),t.image?(n(),l("img",{key:0,class:"f-right problem-img",src:t.image},null,8,es)):r("",!0)],6))),128))]),s("p",ts,o(e.config.problemsSection.description2),1)]),os,s("div",is,[s("div",ns,[s("h2",ls,o(e.config.deploying.title),1),s("p",cs,o(e.config.deploying.description),1)]),s("div",ps,[s("div",rs,[s("p",ds,o(`${e.selectedDeployOption<9?`0${e.selectedDeployOption+1}`:e.selectedDeployOption+1}
              \u2014
              ${e.config.deploying.steps.length<10?`0${e.config.deploying.steps.length}`:e.config.deploying.steps.length}`),1),(n(!0),l(a,null,_(e.config.deploying.steps,(t,c)=>(n(),l("h3",{key:c,onMouseover:As=>e.selectedDeployOption=c,class:m([{active:e.selectedDeployOption===c},"deploy-step mb-3"])},[g(o(t.name)+" ",1),e.selectedDeployOption===c?(n(),l("img",_s)):r("",!0)],42,as))),128))]),s("div",fs,[s("div",gs,[s("img",{class:"step-img",src:e.config.deploying.steps[e.selectedDeployOption].image},null,8,ms)]),s("p",hs,o(e.config.deploying.steps[e.selectedDeployOption].description),1)])])]),s("div",ys,[s("div",vs,[s("h2",xs,o(e.config.roadmap.title),1)]),s("div",us,[s("div",bs,[ws,(n(!0),l(a,null,_(e.config.roadmap.items,(t,c)=>(n(),l("div",{key:c,class:"roadmap-step",style:d(`top: ${t.top}px; left: ${t.left}px;`)},[t.linePosition==="top"?(n(),l("div",{key:0,class:"roadmap-step-pointer-line",style:d(`height: ${t.height}px;`)},null,4)):r("",!0),s("div",ks,o(c<9?`0${c+1}`:c+1),1),t.linePosition==="bottom"?(n(),l("div",{key:1,class:"roadmap-step-pointer-line",style:d(`height: ${t.height}px;`)},null,4)):r("",!0),s("p",{class:"landing-description pointer-text",style:d(t.linePosition==="top"?`margin-top:${t.height}px`:"")},o(t.text),5)],4))),128))])],512)]),s("div",Os,[s("div",Ds,[s("h2",Ts,o(e.config.name.title),1),s("p",Ls,o(e.config.name.description),1)]),s("img",{src:e.config.name.image},null,8,Ss)])],32)):r("",!0)}const Ns=x(T,[["render",Ys]]),Es=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),Ps={name:"index.md"},Vs=Object.assign(Ps,{setup(i){return(p,y)=>{const f=w("Footer");return n(),l("div",null,[h(Ns),h(f,{class:"p-130"})])}}});export{Es as __pageData,Vs as default};
