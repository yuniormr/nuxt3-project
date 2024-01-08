import{d as w,a as s,i as e,l as r,v as d,n as k,o as a}from"./vue.esm-bundler.3c6330b2.js";import{_ as y}from"./Confirmation.vue.216fc485.js";import"./DsTitle.vue.371a4a2e.js";import"./propsStyle.11df4811.js";import"./DsContent.vue.dee0250b.js";import"./DsButton.vue.45a66f8c.js";import"./nuxt-link.d46656d6.js";import"./ready.16c410c8.js";import"./paths.0a99bdd6.js";import"./index.e7fd869b.js";const v={key:0,class:"container max-w-[800px] mx-auto h-[100vh]"},C={class:"my-4"},O={id:"modal-js-example",class:k(["flex modal items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0 "]),"aria-labelledby":"title_modal_example1","aria-modal":"true",role:"dialog"},B=e("div",{class:"modal-background bg-black/80 absolute bottom-0 left-0 right-0 top-0"},null,-1),M={class:"max-h-fit relative flex flex-col w-full overflow-hidden md:my-0 md:mx-auto max-w-screen-md"},D={key:0,class:"py-10 px-5 bg-white grow shrink overflow-auto"},T={key:0},$={class:"py-10 px-5 bg-white grow shrink overflow-auto"},A={key:1,class:"bg-neutral-100 border border-t-neutral-300 text-center md:text-right p-5"},j={key:0},g=w({__name:"DsModal",props:{isOpen:{type:Boolean,default:!1},isFooter:{type:Boolean,default:!0},isHeader:{type:Boolean,default:!0}},emits:["close","actionButton"],setup(o,{emit:l}){const c=l;function _(){c("close")}function x(){c("actionButton")}return(t,z)=>o.isOpen?(a(),s("div",v,[e("section",C,[e("div",O,[B,e("div",M,[o.isHeader?(a(),s("section",D,[t.$slots.header?r("",!0):(a(),s("h1",T," Aquí va un header espero por el diseño. ")),d(t.$slots,"header")])):r("",!0),e("section",$,[d(t.$slots,"default")]),o.isFooter?(a(),s("footer",A,[t.$slots.footer?r("",!0):(a(),s("div",j,[e("button",{"aria-labelledby":"form_modal_example1",class:"modal-close font-roboto border border-primary-500 text-primary-500 bg-white px-3 py-2 hover:bg-primary-900 hover:text-white",title:"Cancelar los cambios realizados y cerrar modal",type:"reset",onClick:_}," Cancelar "),e("button",{"aria-labelledby":"form_modal_example1",class:"font-roboto border border-primary-500 bg-primary-500 text-white px-3 py-2 hover:bg-primary-900",title:"Guardar los cambios realizados",type:"submit",onClick:x}," Guardar ")])),d(t.$slots,"footer")])):r("",!0)])])])])):r("",!0)}}),U={components:{Confirmation:y},title:"UiKit/Components/Basic/Modal",component:g,tags:["autodocs"],argTypes:{isOpen:{description:"This property is assigned to a boolean reference and with it we open and close the modal."},isFooter:{description:"This property hides or shows the Footer panel."},isHeader:{description:"This property hides or shows the Header panel."},header:{description:"Any Nuxt3 component can be inserted in this slot."},close:{description:"Emitted when the button is clicked to indicate that the component should be closed."},actionButton:{description:"Emitted when the button is clicked to trigger a specific action."},default:{description:"Any Nuxt3 component can be inserted in this slot."},footer:{description:"A Vue 3 component to be inserted in the footer slot."}}},i={args:{isOpen:!0}},n=({isOpen:o},{argTypes:l})=>({components:{DsModal:g,Confirmation:y},props:Object.keys(l),data(){return{args:{isOpen:o}}},template:`
    <DsModal :is-open="args.isOpen" :is-header="false" :is-footer="false">
      <Confirmation />
    </DsModal>
  `});n.args={isOpen:!0};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  isOpen
}, {
  argTypes
}) => ({
  components: {
    DsModal,
    Confirmation
  },
  props: Object.keys(argTypes),
  data() {
    return {
      args: {
        isOpen: isOpen
      }
    };
  },
  template: \`
    <DsModal :is-open="args.isOpen" :is-header="false" :is-footer="false">
      <Confirmation />
    </DsModal>
  \`
})`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const I=["Default","WithBodyComponent"];export{i as Default,n as WithBodyComponent,I as __namedExportsOrder,U as default};
//# sourceMappingURL=Modal.stories.1f36e23f.js.map
