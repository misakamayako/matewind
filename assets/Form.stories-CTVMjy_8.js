import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r}from"./index-BuYn5Wpo.js";import{F as d}from"./FloatingLabelInput-PtnoJgn1.js";import"./index-D2MAbzvX.js";const g="_FormItem_iolh4_1",j="_FormItemLabel_iolh4_5",C="_TopLabel_iolh4_8",w="_FormItemContent_iolh4_11",y="_inlineForm_iolh4_14",P="_Form_iolh4_1",t={FormItem:g,FormItemLabel:j,TopLabel:C,FormItemContent:w,inlineForm:y,Form:P},f=r.createContext("120"),_=r.createContext(!1),I=r.createContext("left");function m(n){const i=n.width??60,o=n.inline??!1,s=n.labelPosition??"left";return e.jsx("form",{className:[t.Form,o?t.inlineForm:null].join(" "),children:e.jsx(f.Provider,{value:i,children:e.jsx(_.Provider,{value:o,children:e.jsx(I.Provider,{value:s,children:n.children})})})})}m.__docgenInfo={description:"",methods:[],displayName:"Form",props:{width:{required:!1,tsType:{name:"union",raw:"number | `${number}`",elements:[{name:"number"},{name:"literal",value:"`${number}`"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "top"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"top"'}]},description:""}}};function c(n){const i=r.useContext(f),o=r.useContext(_),s=r.useContext(I);return e.jsxs("div",{className:[t.FormItem,o?t.inlineForm:null].join(" "),children:[e.jsx("label",{className:[t.FormItemLabel,s==="top"?t.TopLabel:null].join(" "),style:{width:i+"px"},children:n.label}),e.jsx("div",{className:t.FormItemContent,children:n.children})]})}c.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const q={component:m,render:({width:n,labelPosition:i,inline:o})=>e.jsxs(m,{inline:o,labelPosition:i,width:n,children:[e.jsx(c,{label:"this is a label",children:e.jsx(d,{})}),e.jsx(c,{label:"this is second label",children:e.jsx(d,{})})]})},l={name:"default form",args:{width:"120",labelPosition:"left"},argTypes:{width:{control:"text",description:"Can be a number or a numeric string."}}},a={name:"inlineForm",args:{inline:!0,width:"120",labelPosition:"top"},argTypes:{width:{control:"text",description:"Can be a number or a numeric string."}}};var u,p,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "default form",
  args: {
    width: "120",
    labelPosition: "left"
  },
  argTypes: {
    width: {
      control: "text",
      description: "Can be a number or a numeric string."
    }
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,F,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "inlineForm",
  args: {
    inline: true,
    width: "120",
    labelPosition: "top"
  },
  argTypes: {
    width: {
      control: "text",
      description: "Can be a number or a numeric string."
    }
  }
}`,...(x=(F=a.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const R=["Default","InlineForm"];export{l as Default,a as InlineForm,R as __namedExportsOrder,q as default};
