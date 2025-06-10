import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-2yJIXLcc.js";import{O as o}from"./Option-B1D5oDym.js";const p={component:o},e=()=>{const[t,a]=r.useState(!1),l=r.useRef({id:1,label:"this is a label"});return u.jsx(o,{current:l.current,selected:t,onClick:()=>a(!t)})};var s,c,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const current = useRef({
    id: 1,
    label: "this is a label"
  });
  return <Option current={current.current} selected={selected} onClick={() => setSelected(!selected)} />;
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,p as default};
