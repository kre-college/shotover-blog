import{_ as d,w as h,d as m,o as c,c as n,a as s,F as f,r as g,t as e,b as p,e as u,h as _}from"./app.47a1a573.js";const v={data(){return{base:null,config:{}}},mounted(){this.base=h,m(()=>import("./chunks/config.5e31528a.js"),["assets/chunks/config.5e31528a.js","assets/app.47a1a573.js"]).then(a=>{this.config=a.default.pagesConfig.contacts})}},y={key:0,class:"contacts w-100 mt-5"},b={class:"w-60 f-left"},w=s("h2",{class:"landing-description-title"},"Contact us.",-1),C={class:"contact-header"},k={class:"contact-info"},x=["href"],B={class:"adress mt-6"},F=s("h3",{class:"contact-header"},"Adress:",-1),N={class:"contact-info"},V={class:"contact-info"},D={class:"contact-info"},E={class:"w-40 f-left"},O={class:"img-msg"},P=["src"];function A(a,r,l,i,t,S){return t.config.imageMsg&&t.base?(c(),n("div",y,[s("div",b,[w,(c(!0),n(f,null,g(t.config.enquiries,o=>(c(),n("div",{key:o.email,class:"enquiries mt-6"},[s("h3",C,e(o.name),1),s("h3",k,[s("a",{href:`mailto:${o.email}`},e(o.email),9,x)])]))),128)),s("div",B,[F,s("h3",N,e(t.config.adress.company),1),s("h3",V,e(t.config.adress.city),1),s("h3",D,e(t.config.adress.country),1)])]),s("div",E,[s("h3",O,e(t.config.imageMsg),1),s("img",{src:t.base(t.config.image),class:"contacts-img"},null,8,P)])])):p("",!0)}const L=d(v,[["render",A]]),I=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"contacts.md"}'),M={name:"contacts.md"},J=Object.assign(M,{setup(a){return(r,l)=>{const i=u("Footer");return c(),n("div",null,[_(L,{class:"p-130"}),_(i,{class:"p-130"})])}}});export{I as __pageData,J as default};