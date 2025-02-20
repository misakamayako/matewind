import{j as u}from"./jsx-runtime-CLpGMVip.js";import{r as s}from"./index-CZMpeKRu.js";import{O as o}from"./Option-aV1_8Uzj.js";const p={component:o},e=()=>{const[t,a]=s.useState(!1),l=s.useRef({id:1,label:"this is a label"});return u.jsx(o,{current:l.current,selected:t,onClick:()=>a(!t)})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const current = useRef({
    id: 1,
    label: "this is a label"
  });
  return <Option current={current.current} selected={selected} onClick={() => setSelected(!selected)} />;
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,p as default};
