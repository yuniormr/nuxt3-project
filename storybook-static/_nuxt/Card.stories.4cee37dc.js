import{c as H}from"./common.6123510e.js";import{d as N,a as d,n as m,t as I,l,j as A,k as c,u as e,o as a}from"./vue.esm-bundler.3c6330b2.js";import{m as D,a as E,b as $,c as j,d as z,p as V,e as q,f as v,g as K,h as O,i as P,j as U,k as F,n as G,l as J}from"./propsStyle.11df4811.js";import{_ as M}from"./DsLink.vue.ccb1d83e.js";import{_ as Q}from"./DsContent.vue.dee0250b.js";import{_ as W}from"./DsTag.vue.52ffdbd6.js";import"./nuxt-link.d46656d6.js";import"./ready.16c410c8.js";import"./paths.0a99bdd6.js";import"./index.e7fd869b.js";import"./DsTitle.vue.371a4a2e.js";const X=N({__name:"DsCard",props:{isRadius:{type:Boolean,default:!0},hasContentTop:{type:Boolean,default:!0},topColor:{type:String,default:"primary"},hasContentBottom:{type:Boolean,default:!0},isTargetBlank:{type:Boolean,default:!1},textTop:{type:String,default:"Lorem ipsum"},titleText:{type:String,default:"Título demo"},textBottom:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor soluta doloremque"},hasLineAwesome:{type:Boolean,default:!0},hasTag:{type:Boolean,default:!0},tagText:{type:String,default:"Tag example"},titleHasIcon:{type:Boolean,default:!1},lineAwesome:{type:String,default:"las la-check-circle"},margin:String,marginTop:String,marginLeft:String,marginRight:String,marginBottom:String,padding:String,paddingTop:String,paddingRight:String,paddingBottom:String,paddingLeft:String,border:String,borderTop:String,borderRight:String,borderBottom:String,borderLeft:String},setup(t){const w={dark:"text-dark-500",primary:"text-primary-500"};return(Z,_)=>(a(),d("div",{class:m([[{"rounded-lg":t.isRadius},e(D)[t.margin],e(E)[t.marginTop],e($)[t.marginLeft],e(j)[t.marginRight],e(z)[t.marginBottom],e(V)[t.padding],e(q)[t.paddingTop],e(v)[t.paddingLeft],e(K)[t.paddingRight],e(O)[t.paddingBottom],e(P)[t.border],e(U)[t.borderTop],e(F)[t.borderRight],e(G)[t.borderBottom],e(J)[t.borderLeft]],"p-4 border border-primary mb-3"])},[t.hasContentTop?(a(),d("span",{key:0,class:m([[w[t.topColor],"font-roboto"],"mb-2"])},I(t.textTop),3)):l("",!0),A(M,{bold:!0,"has-line-awesome":t.hasLineAwesome,"has-title-as-component":!0,"is-diplay-block":!0,"is-target-blank":t.isTargetBlank,title:t.titleText,"title-has-icon":t.titleHasIcon,"title-line-awesome":t.lineAwesome,color:"dark",href:"",letter:"robotoSlab",size:"text-2xl"},null,8,["has-line-awesome","is-target-blank","title","title-has-icon","title-line-awesome"]),t.hasContentBottom?(a(),c(Q,{key:1,text:t.textBottom,class:"mb-2"},null,8,["text"])):l("",!0),t.hasTag?(a(),c(W,{key:2,"text-tag":t.tagText,"background-color":"neutral",letter:"robotoSlab","tag-text-color":"primary"},null,8,["text-tag"])):l("",!0)],2))}}),{backgroundColor:ct,...Y}=H,gt={title:"UiKit/Components/Basic/Card",component:X,tags:["autodocs"],argTypes:{isRadius:{description:"Border radius - boolean"},hasContentTop:{description:"Has content top - boolean"},topColor:{control:{type:"select"},options:["primary","dark"],description:"Content top color"},hasContentBottom:{description:"Has content bottom - boolean"},isTargetBlank:{control:"boolean",description:"Set link target to blank or self"},hasLineAwesome:{control:"boolean",description:"Set link icon"},hasTag:{control:"boolean",description:"Set tags for the card"},titleHasIcon:{control:"boolean",description:"Set an icon for the title"},...Y}},o={args:{}},r={args:{hasContentTop:!1}},s={args:{hasContentBottom:!1}},n={args:{hasTag:!1}},i={args:{titleHasIcon:!0}};var g,p,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,C,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hasContentTop: false
  }
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var h,T,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hasContentBottom: false
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var S,y,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    hasTag: false
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,L,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    titleHasIcon: true
  }
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const pt=["Default","NoTopContent","NoBottomContent","NoTags","TitleHasIcon"];export{o as Default,s as NoBottomContent,n as NoTags,r as NoTopContent,i as TitleHasIcon,pt as __namedExportsOrder,gt as default};
//# sourceMappingURL=Card.stories.4cee37dc.js.map