import{c as h}from"./common.6123510e.js";import{d as B,r as R,C as L,D as A,u as a,a as v,t as q,E as k,n as z,o as D}from"./vue.esm-bundler.3c6330b2.js";import{x as O,m as V,a as E,b as M,c as H,d as U,p as j,e as w,f as F,g as I,h as K,i as P,j as G,k as J,l as N,n as Q}from"./propsStyle.11df4811.js";const W=["disabled","placeholder","readonly","required"],X=B({__name:"TextArea",props:{value:{type:String},size:{type:String,default:"normal"},radius:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},placeHolderTextValue:{type:String},margin:String,marginTop:String,marginLeft:String,marginRight:String,marginBottom:{type:String,default:"2"},padding:{type:String,default:2},paddingTop:{type:String},paddingBottom:{type:String},paddingRight:{type:String},paddingLeft:{type:String},border:{type:String},borderBottom:{type:String},borderTop:{type:String},borderLeft:{type:String},borderRight:{type:String}},setup(e){const d=R(e.value);return(C,n)=>L((D(),v("textarea",{"onUpdate:modelValue":n[0]||(n[0]=x=>k(d)?d.value=x:null),class:z([a(O)[e.size],"border","block",{rounded:e.radius},a(V)[e.margin],a(E)[e.marginTop],a(M)[e.marginLeft],a(H)[e.marginRight],a(U)[e.marginBottom],a(j)[e.padding],a(w)[e.paddingTop],a(F)[e.paddingLeft],a(I)[e.paddingRight],a(K)[e.paddingBottom],a(P)[e.border],a(G)[e.borderTop],a(J)[e.borderRight],a(N)[e.borderLeft],a(Q)[e.borderBottom]]),disabled:e.disabled,placeholder:e.placeHolderTextValue??"Textarea",readonly:e.readOnly,required:e.required},q(C.exampleTextValue??""),11,W)),[[A,a(d)]])}}),{backgroundColor:ae,...Y}=h,re={title:"UiKit/Elements/Form/TextArea",component:X,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","normal","medium","large"],description:"Small, normal, medium, large"},radius:{description:"border radius - boolean"},required:{description:"Required fields - boolean"},value:{description:"Init value to the element"},...Y}},r={args:{}},t={args:{rounded:!0}},s={args:{disabled:!0}},o={args:{readOnly:!0}};var i,l,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,u,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const te=["MainTextArea","Rounded","Disabled","Readonly"];export{s as Disabled,r as MainTextArea,o as Readonly,t as Rounded,te as __namedExportsOrder,re as default};
//# sourceMappingURL=TextArea.stories.42a13d6f.js.map
