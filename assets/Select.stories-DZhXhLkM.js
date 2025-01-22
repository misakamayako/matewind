import{j as c}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-CZMpeKRu.js";import{S as i}from"./Select-CwxL0ltO.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./transition-DJ_TwKzC.js";const C={component:i},p=[{id:1,text:"Option 1"},{id:2,text:"Option 2"},{id:3,text:"Option 3"},{id:4,text:"Option 4"}],o=()=>{const[t,n]=l.useState(1);return c.jsx(i,{options:p,placeholder:"Select an option",value:t,onChange:e=>n(e)})},s=()=>{const[t,n]=l.useState([1,2]);return c.jsx(i,{multiple:!0,options:p,placeholder:"Select multiple options",value:t,onChange:e=>n(e)})},a=()=>{const[t,n]=l.useState([]),[e,x]=l.useState(p),v=()=>{const r={id:e.length+1,text:`Option ${e.length+1}`};x([...e,r])};return c.jsx(i,{multiple:!0,addNew:v,options:e,placeholder:"Add new options",value:t,onChange:r=>n(r)})};o.__docgenInfo={description:"",methods:[],displayName:"SingleSelect"};s.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};a.__docgenInfo={description:"",methods:[],displayName:"WithAddNew"};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(1);
  return <Select options={options} placeholder="Select an option" value={value} onChange={newValue => setValue(newValue as number)} />;
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,h,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number[]>([1, 2]);
  return <Select multiple options={options} placeholder="Select multiple options" value={value} onChange={newValue => setValue(newValue as number[])} />;
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,O,V;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState(options);
  const handleAddNew = () => {
    const newOption = {
      id: dynamicOptions.length + 1,
      text: \`Option \${dynamicOptions.length + 1}\`
    };
    setDynamicOptions([...dynamicOptions, newOption]);
  };
  return <Select multiple addNew={handleAddNew} options={dynamicOptions} placeholder="Add new options" value={value} onChange={newValue => setValue(newValue as number[])} />;
}`,...(V=(O=a.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const j=["SingleSelect","MultiSelect","WithAddNew"];export{s as MultiSelect,o as SingleSelect,a as WithAddNew,j as __namedExportsOrder,C as default};
