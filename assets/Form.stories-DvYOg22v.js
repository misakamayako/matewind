import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./Button-_4CykwWA.js";import{F as l,a as i}from"./Tag-C6O_w9z4.js";import{F as a}from"./FloatingLabelInput-BA7Awa4f.js";import"./Pager-CULFxKHR.js";import"./Select-Bo_mqxqZ.js";import"./Table-CASTOlGJ.js";import"./index-CZMpeKRu.js";import"./index-Dy_t9DXc.js";import"./index-D-TIQtLp.js";import"./Option-aV1_8Uzj.js";const P={component:l},t=o=>e.jsxs(l,{inline:o.inline,labelPosition:o.labelPosition,width:o.width,children:[e.jsx(i,{label:"this is a label",children:e.jsx(a,{})}),e.jsx(i,{label:"this is second label",children:e.jsx(a,{})})]});t.args={width:"120",labelPosition:"left"};t.argTypes={width:{control:"text",description:"Can be a number or a numeric string."},children:{table:{disable:!0}},labelPosition:{options:["top","left"],control:{type:"radio"}}};const r=o=>e.jsxs(l,{...o,width:0,children:[e.jsx(i,{children:e.jsx(a,{label:"this is a label"})}),e.jsx(i,{children:e.jsx(a,{label:"this is another label"})})]});r.args={};t.argTypes={width:{control:"text",description:"Can be a number or a numeric string."},children:{table:{disable:!0}}};t.__docgenInfo={description:"",methods:[],displayName:"WithDefaultLabel"};r.__docgenInfo={description:"",methods:[],displayName:"WithFloatingLabel"};var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(props: Parameters<typeof Form>[0]) => {
  return <Form inline={props.inline} labelPosition={props.labelPosition} width={props.width}>
            <FormItem label={"this is a label"}>
                <FloatingLabelInput />
            </FormItem>
            <FormItem label={"this is second label"}>
                <FloatingLabelInput />
            </FormItem>
        </Form>;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,b,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(props: Parameters<typeof Form>[0]) => {
  return <Form {...props} width={0}>
            <FormItem>
                <FloatingLabelInput label={"this is a label"} />
            </FormItem>
            <FormItem>
                <FloatingLabelInput label={"this is another label"} />
            </FormItem>
        </Form>;
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const y=["WithDefaultLabel","WithFloatingLabel"];export{t as WithDefaultLabel,r as WithFloatingLabel,y as __namedExportsOrder,P as default};
