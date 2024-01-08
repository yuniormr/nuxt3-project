import{c as re}from"./common.6123510e.js";import{_ as se}from"./DsLink.vue.ccb1d83e.js";import"./nuxt-link.d46656d6.js";import"./vue.esm-bundler.3c6330b2.js";import"./ready.16c410c8.js";import"./paths.0a99bdd6.js";import"./index.e7fd869b.js";import"./propsStyle.11df4811.js";import"./DsTitle.vue.371a4a2e.js";const{backgroundColor:ge,...oe}=re,ue={title:"UiKit/Elements/Basic/Link",component:se,tags:["autodocs"],argTypes:{color:{description:"dark, primary, white",control:{type:"select"},options:["dark","primary","white"]},letter:{control:{type:"select"},options:["roboto","robotoSlab"]},textAlignment:{control:{type:"select"},options:["left","center","right"],description:"Position of the text"},size:{control:{type:"select"},options:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"]},isUnderlined:{control:"boolean",description:"Underlined",defaultValue:!1},hasLineAwesome:{control:"boolean",description:"Line awesome for links",defaultValue:!0},lineAwesomeColor:{description:"dark, primary, white",control:{type:"select"},options:["dark","primary","white"]},lineAwesomeSize:{control:{type:"select"},options:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"]},isDiplayBlock:{control:"boolean",description:"Displays as block to use as titles"},hasTitleAsComponent:{control:"boolean",defaultValue:!1,description:"Displays an H2 tag as the title"},titleHasIcon:{type:"boolean",description:"Set an icon for the title"},...oe}},e={args:{}},t={args:{bold:!0}},r={args:{letter:"robotoSlab"}},s={args:{letter:"roboto"}},o={args:{size:"text-xs"}},a={args:{size:"text-sm"}},n={args:{size:"text-base"}},c={args:{size:"text-lg"}},i={args:{size:"text-xl"}},l={args:{size:"text-2xl"}},p={args:{size:"text-3xl"}},x={args:{size:"text-4xl"}},m={args:{size:"text-5xl"}},d={args:{isRectangle:!0}};var g,u,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,T,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bold: true
  }
}`,...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    letter: "robotoSlab"
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,w,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    letter: "roboto"
  }
}`,...(R=(w=s.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,L,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: "text-xs"
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var D,B,X;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: "text-sm"
  }
}`,...(X=(B=a.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var C,U,V;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "text-base"
  }
}`,...(V=(U=n.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var E,H,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "text-lg"
  }
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var W,I,K;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "text-xl"
  }
}`,...(K=(I=i.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var O,j,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: "text-2xl"
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var v,F,G;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "text-3xl"
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,M,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "text-4xl"
  }
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: "text-5xl"
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isRectangle: true
  }
}`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const be=["Default","Weight","RobotoSlab","Roboto","TextXs","TextSm","TextBase","TextLg","TextXl","Text2xl","Text3xl","Text4xl","Text5xl","Rectangle"];export{e as Default,d as Rectangle,s as Roboto,r as RobotoSlab,l as Text2xl,p as Text3xl,x as Text4xl,m as Text5xl,n as TextBase,c as TextLg,a as TextSm,i as TextXl,o as TextXs,t as Weight,be as __namedExportsOrder,ue as default};
//# sourceMappingURL=Link.stories.89b86157.js.map
