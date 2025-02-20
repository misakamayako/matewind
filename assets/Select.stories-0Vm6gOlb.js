import{j as l}from"./jsx-runtime-CLpGMVip.js";import{r as m}from"./index-CZMpeKRu.js";import{S as s}from"./Select-Bo_mqxqZ.js";import"./FloatingLabelInput-BA7Awa4f.js";import"./Option-aV1_8Uzj.js";const x={component:s},S=[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"},{id:4,label:"Option 4"},{id:5,label:"Option 5"}],e=()=>{const[o,n]=m.useState();return l.jsxs("div",{children:[l.jsx(s,{search:!0,options:S,placeholder:"Select an option",value:o,onChange:a=>{console.count("callback"),n(a)}}),l.jsxs("p",{children:["value:",o]})]})},t=()=>{const[o,n]=m.useState([1,2]);return l.jsx(s,{multiple:!0,options:S,placeholder:"Select multiple options",value:o,onChange:a=>n(a)})};e.__docgenInfo={description:"",methods:[],displayName:"SingleSelect"};t.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};var r,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>();
  return <div>
            <Select search options={options} placeholder="Select an option" value={value} onChange={newValue => {
      console.count("callback");
      setValue(newValue);
    }} />
            <p>value:{value}</p>
        </div>;
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number[]>([1, 2]);
  return <Select multiple options={options} placeholder="Select multiple options" value={value} onChange={newValue => setValue(newValue)} />;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const _=["SingleSelect","MultiSelect"];export{t as MultiSelect,e as SingleSelect,_ as __namedExportsOrder,x as default};
