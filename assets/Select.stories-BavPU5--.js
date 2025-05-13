import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-2yJIXLcc.js";import"./Button-BMswa-Cn.js";import{S as d}from"./Tag-CyvJyZIy.js";import"./FloatingLabelInput-esnStef_.js";import"./Pager-CuikBxut.js";import"./Table-CnUlTgBP.js";import"./Option-D-_hemD3.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";const N={title:"Component/Select",tags:["autodoc"],component:d,argTypes:{onChange:{action:"changed"}}},m=n=>{const[a,s]=t.useState(n.multiple?[]:null);return b.jsx(d,{...n,value:a,onChange:l=>{s(l),n.onChange(l)}})},o=m.bind({});o.args={multiple:!1,options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],placeholder:"Select an option"};const r=m.bind({});r.args={multiple:!0,options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],placeholder:"Select options"};const i=m.bind({});i.args={multiple:!1,search:!0,options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],placeholder:"Search and select an option"};const u=m.bind({});u.args={multiple:!0,search:!0,options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],placeholder:"Search and select options"};const c=()=>{const[n,a]=t.useState(!1),[s,l]=t.useState([{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}]),[g,S]=t.useState(),h=t.useCallback(e=>{a(!0),setTimeout(()=>{a(!1),l([{id:`new${e}`,label:`new option:${e}`}])},1500)},[]);return b.jsx(d,{search:!0,loading:n,options:s,remote:h,value:g,onChange:e=>S(e)})},p=()=>{const[n,a]=t.useState(!1),[s,l]=t.useState([{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}]),[g,S]=t.useState([]),h=t.useCallback(e=>{a(!0),setTimeout(()=>{a(!1),l([{id:`new${e}`,label:`new option:${e}`}])},1500)},[]);return b.jsx(d,{multiple:!0,search:!0,loading:n,options:s,remote:h,value:g,onChange:e=>S(e)})};var O,V,x;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>(args.multiple ? [] : null);
  return <Select {...args}
  // @ts-expect-error:as template
  value={value} onChange={newValue => {
    // @ts-expect-error:as template
    setValue(newValue);
    // @ts-expect-error:as template
    args.onChange(newValue);
  }} />;
}`,...(x=(V=o.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var v,C,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>(args.multiple ? [] : null);
  return <Select {...args}
  // @ts-expect-error:as template
  value={value} onChange={newValue => {
    // @ts-expect-error:as template
    setValue(newValue);
    // @ts-expect-error:as template
    args.onChange(newValue);
  }} />;
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var f,L,$;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>(args.multiple ? [] : null);
  return <Select {...args}
  // @ts-expect-error:as template
  value={value} onChange={newValue => {
    // @ts-expect-error:as template
    setValue(newValue);
    // @ts-expect-error:as template
    args.onChange(newValue);
  }} />;
}`,...($=(L=i.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var M,T,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>(args.multiple ? [] : null);
  return <Select {...args}
  // @ts-expect-error:as template
  value={value} onChange={newValue => {
    // @ts-expect-error:as template
    setValue(newValue);
    // @ts-expect-error:as template
    args.onChange(newValue);
  }} />;
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var R,k,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(false);
  const [options, setOption] = useState([{
    id: "1",
    label: "Option 1"
  }, {
    id: "2",
    label: "Option 2"
  }, {
    id: "3",
    label: "Option 3"
  }]);
  const [value, setValue] = useState<string>();
  const handleSearch = useCallback((text: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOption([{
        id: \`new\${text}\`,
        label: \`new option:\${text}\`
      }]);
    }, 1500);
  }, []);
  return <Select search loading={loading} options={options} remote={handleSearch} value={value} onChange={it => setValue(it)} />;
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,y,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(false);
  const [options, setOption] = useState([{
    id: "1",
    label: "Option 1"
  }, {
    id: "2",
    label: "Option 2"
  }, {
    id: "3",
    label: "Option 3"
  }]);
  const [value, setValue] = useState<string[]>([]);
  const handleSearch = useCallback((text: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOption([{
        id: \`new\${text}\`,
        label: \`new option:\${text}\`
      }]);
    }, 1500);
  }, []);
  return <Select multiple search loading={loading} options={options} remote={handleSearch} value={value} onChange={it => setValue(it)} />;
}`,...(q=(y=p.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};const P=["SingleSelect","MultipleSelect","SearchableSingleSelect","SearchableMultipleSelect","RemoteSearchableSingleSelect","RemoteSearchableMultipleSelect"];export{r as MultipleSelect,p as RemoteSearchableMultipleSelect,c as RemoteSearchableSingleSelect,u as SearchableMultipleSelect,i as SearchableSingleSelect,o as SingleSelect,P as __namedExportsOrder,N as default};
