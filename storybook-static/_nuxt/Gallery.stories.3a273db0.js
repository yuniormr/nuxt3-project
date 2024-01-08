import{d as le,r as y,a as t,i as a,F as ie,J as ne,j as ce,p as me,T as de,o,n as ge,t as pe,l as b,K as ue,L as he}from"./vue.esm-bundler.3c6330b2.js";import{_ as _e}from"./_plugin-vue_export-helper.c27b6911.js";const ae=l=>(ue("data-v-69a38ca0"),l=l(),he(),l),fe={class:"relative p-2"},ve={class:"grid gap-4 min-w-[250px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},ye=["src"],xe={class:"overlay absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center"},be=["onClick"],we={key:0,class:"fixed top-0 left-0 w-full h-screen flex items-center justify-center"},Se=ae(()=>a("div",{class:"fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"},null,-1)),Ce={class:"modal bg-white rounded-lg z-20 overflow-hidden"},Ie=ae(()=>a("i",{"aria-hidden":"true",class:"las la-times block text-3xl"},null,-1)),je=[Ie],ke={class:"p-4"},Le=["src"],Re={key:0,class:"w-[90vw] max-w-[600px] text-justify overflow-hidden whitespace-nowrap"},e="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante nisl. Sed placerat, tortor ac accumsan ultrices, mauris nibh fermentum elit, eu ",Te=le({__name:"Gallery",setup(l){const se=y([{id:1,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:2,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:3,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:1,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:2,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:3,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:1,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:2,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:3,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:1,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:2,url:"/images/sample-image.jpg",description:e,alt:"imagen1"},{id:3,url:"/images/sample-image.jpg",description:e,alt:"imagen1"}]),s=y(null),r=y(!1),re=x=>{s.value=x},te=()=>{s.value=null,r.value=!1};function oe(){r.value=!0}return(x,De)=>(o(),t("div",fe,[a("div",ve,[(o(!0),t(ie,null,ne(se.value,v=>(o(),t("div",{key:v.id,class:"relative"},[a("img",{src:v.url,alt:"Image",class:"w-full h-full object-cover rounded-lg"},null,8,ye),a("div",xe,[a("button",{class:"text-white font-bold uppercase",onClick:Ee=>re(v)},"Ver detalle",8,be)])]))),128))]),ce(de,{name:"fade"},{default:me(()=>[s.value?(o(),t("div",we,[Se,a("div",Ce,[a("div",{class:"flex justify-end"},[a("button",{"aria-label":"Cerrar",class:"close-modal p-2 bg-white rounded-full text-sm mr-4",onClick:te},je)]),a("div",ke,[a("img",{src:s.value.url,alt:"Selected Image",class:"w-[90vw] max-w-[600px] h-auto object-cover rounded-lg mb-4",onLoad:oe},null,40,Le),r.value?(o(),t("p",Re,[a("span",{class:ge([{"animate-typing":r.value,"opacity-0":!r.value},"inline-block"])},pe(s.value.description),3)])):b("",!0)])])])):b("",!0)]),_:1})]))}});const Be=_e(Te,[["__scopeId","data-v-69a38ca0"]]),Me={title:"Example/Gallery",component:Be,tags:["autodocs"],argTypes:{textAlignment:{control:{type:"select"},options:["left","center","right"],description:"Position of the text"},type:{control:{type:"select"},options:["anchor","button","submit"],description:"HTMLAnchorElement, HTMLButtonElement, HTMLSubmitButtonElement"},textColor:{control:{type:"select"},options:["white","primary"],description:"white, primary"},backgroundColor:{control:{type:"select"},options:["primary","danger","white"],description:"primary, danger, white"},borderColor:{control:{type:"select"},options:["primary","danger"],description:"primary, danger"}}},i={args:{}},n={args:{awesomeLeft:"las la-plus"}},c={args:{awesomeRight:"las la-plus"}},m={args:{urlImageLeft:"/images/claveunica-icon.svg"}},d={args:{urlImageRight:"/images/claveunica-icon.svg"}},g={args:{text:"Other text",urlImageRight:"/images/claveunica-icon.svg"}},p={args:{backgroundColor:"primary",textColor:"white"}},u={args:{backgroundColor:"danger",textColor:"white",borderColor:"danger"}},h={args:{isSmall:!0}},_={args:{isRadius:!0}},f={args:{disabled:!0}};var w,S,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,j,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    awesomeLeft: "las la-plus"
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var L,R,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    awesomeRight: "las la-plus"
  }
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var B,D,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    urlImageLeft: "/images/claveunica-icon.svg"
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,G,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    urlImageRight: "/images/claveunica-icon.svg"
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var O,V,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: "Other text",
    urlImageRight: "/images/claveunica-icon.svg"
  }
}`,...(z=(V=g.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,N,P;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    backgroundColor: "primary",
    textColor: "white"
  }
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,J,K;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    backgroundColor: "danger",
    textColor: "white",
    borderColor: "danger"
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var $,q,Q;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isSmall: true
  }
}`,...(Q=(q=h.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var U,W,X;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isRadius: true
  }
}`,...(X=(W=_.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Oe=["Default","FontLeft","FontRight","ImageLeft","ImageRight","OtherText","Primary","Danger","IsSmall","BorderRadius","Disabled"];export{_ as BorderRadius,u as Danger,i as Default,f as Disabled,n as FontLeft,c as FontRight,m as ImageLeft,d as ImageRight,h as IsSmall,g as OtherText,p as Primary,Oe as __namedExportsOrder,Me as default};
//# sourceMappingURL=Gallery.stories.3a273db0.js.map
