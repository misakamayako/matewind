import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./Button-CPzBFJVf.js";import{F as l,a}from"./Tag-BYYgo5of.js";import{F as i}from"./FloatingLabelInput-CJ0DZAft.js";import"./Pager-D6ozxkmE.js";import"./Table-DomWjCQb.js";import"./Option-_FTdP7sq.js";import"./index-CZMpeKRu.js";import"./index-C5atF7ks.js";import"./index-D-TIQtLp.js";const L={component:l},t=r=>e.jsxs(l,{inline:r.inline,labelPosition:r.labelPosition,width:r.width,children:[e.jsx(a,{label:"this is a label",children:e.jsx(i,{})}),e.jsx(a,{label:"this is second label",children:e.jsx(i,{})})]});t.args={width:"120",labelPosition:"left"};t.argTypes={width:{control:"text",description:"Can be a number or a numeric string."},children:{table:{disable:!0}},labelPosition:{options:["top","left"],control:{type:"radio"}}};const o=r=>e.jsxs(l,{...r,width:0,children:[e.jsx(a,{children:e.jsx(i,{label:"this is a label"})}),e.jsx(a,{children:e.jsx(i,{label:"this is another label"})})]});o.args={};t.argTypes={width:{control:"text",description:"Can be a number or a numeric string."},children:{table:{disable:!0}}};var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(props: Parameters<typeof Form>[0]) => {
  return <Form inline={props.inline} labelPosition={props.labelPosition} width={props.width}>
            <FormItem label={"this is a label"}>
                <FloatingLabelInput />
            </FormItem>
            <FormItem label={"this is second label"}>
                <FloatingLabelInput />
            </FormItem>
        </Form>;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,b,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(props: Parameters<typeof Form>[0]) => {
  return <Form {...props} width={0}>
            <FormItem>
                <FloatingLabelInput label={"this is a label"} />
            </FormItem>
            <FormItem>
                <FloatingLabelInput label={"this is another label"} />
            </FormItem>
        </Form>;
}`,...(c=(b=o.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const P=["WithDefaultLabel","WithFloatingLabel"];export{t as WithDefaultLabel,o as WithFloatingLabel,P as __namedExportsOrder,L as default};
