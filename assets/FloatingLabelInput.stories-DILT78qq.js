import{j as e}from"./jsx-runtime-CLpGMVip.js";import{F}from"./FloatingLabelInput-CJ0DZAft.js";const I={title:"Component/FloatingLabelInput",component:F,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["normal","small"],if:{arg:"textArea",truthy:!1}},textArea:{control:{type:"boolean"},defaultValue:!1},clearable:{control:{type:"boolean"},if:{arg:"textArea",truthy:!1}}}},a={args:{placeholder:"Enter text...",maxLength:50}},r={args:{label:"Username",placeholder:" "}},t={args:{prefix:e.jsx("span",{style:{padding:"0 4px"},children:"🔍"}),placeholder:"Search..."},decorators:[p=>e.jsx("div",{style:{width:"300px",margin:"20px auto"},children:e.jsx(p,{})})]},s={args:{size:"small",label:"Small Input",placeholder:" "}},n={args:{textArea:!0,label:"Description",rows:4,placeholder:"Enter description...",maxLength:200}},o={args:{label:"Tweet",maxLength:140,placeholder:"What's happening?"}},l={args:{textArea:!1,label:"Full Name",size:"normal",prefix:e.jsx("span",{style:{paddingRight:4},children:"👤"}),placeholder:" ",maxLength:30,clearable:!0,style:{width:"400px",backgroundColor:"#f5f5f5"}},decorators:[p=>e.jsx("div",{style:{padding:"2rem",display:"flex",justifyContent:"center"},children:e.jsx(p,{})})]};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    maxLength: 50
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,g,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: " "
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    prefix: <span style={{
      padding: "0 4px"
    }}>🔍</span>,
    placeholder: "Search..."
  },
  decorators: [Story => <div style={{
    width: "300px",
    margin: "20px auto"
  }}>
                <Story />
            </div>]
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,b,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small Input",
    placeholder: " "
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var L,j,A;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    textArea: true,
    label: "Description",
    rows: 4,
    placeholder: "Enter description...",
    maxLength: 200
  }
}`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var w,E,W;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Tweet",
    maxLength: 140,
    placeholder: "What's happening?"
  }
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var z,C,v;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    textArea: false,
    label: "Full Name",
    size: "normal",
    prefix: <span style={{
      paddingRight: 4
    }}>👤</span>,
    placeholder: " ",
    maxLength: 30,
    clearable: true,
    style: {
      width: "400px",
      backgroundColor: "#f5f5f5"
    }
  },
  decorators: [Story => <div style={{
    padding: "2rem",
    display: "flex",
    justifyContent: "center"
  }}>
                <Story />
            </div>]
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const R=["Default","WithLabel","WithPrefix","SmallSize","TextArea","WithMaxLength","CompleteExample"];export{l as CompleteExample,a as Default,s as SmallSize,n as TextArea,r as WithLabel,o as WithMaxLength,t as WithPrefix,R as __namedExportsOrder,I as default};
