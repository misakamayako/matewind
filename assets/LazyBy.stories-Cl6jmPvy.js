var m=Object.defineProperty;var f=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>f(a,typeof e!="symbol"?e+"":e,t);import{j as s}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CZMpeKRu.js";import{B as l}from"./Button-_4CykwWA.js";import"./Tag-C6O_w9z4.js";import"./FloatingLabelInput-BA7Awa4f.js";import"./Pager-CULFxKHR.js";import"./Select-Bo_mqxqZ.js";import"./Table-CASTOlGJ.js";class g{constructor(e){o(this,"task");o(this,"result");o(this,"promise");o(this,"initialized",!1);this.task=e}async get(){if(!this.initialized){if(this.promise===void 0){const e=typeof(scheduler==null?void 0:scheduler.postTask)=="function"?scheduler.postTask.bind(scheduler):async t=>t();this.promise=e(async()=>{try{return this.result=await this.task(),this.initialized=!0,this.result}catch(t){throw this.promise=void 0,t}})}return this.promise}if(this.result===void 0)throw new Error("Lazy initialization failed. The task did not complete successfully.");return this.result}}const w={title:"UTILS/LazyBy"},z=async()=>new Promise(a=>{setTimeout(()=>a("Lazy data loaded!"),2e3)}),r=()=>{const a=i.useRef(new g(z)),[e,t]=i.useState(!1),[p,n]=i.useState(""),y=async()=>{t(!0);const h=await a.current.get();n(h),t(!1)};return s.jsxs("div",{style:{padding:"20px"},children:[s.jsx("h2",{children:"LazyBy Example"}),s.jsxs("p",{children:["This demonstrates how the ",s.jsx("code",{children:"LazyBy"})," utility works by lazily fetching data only when needed."]}),s.jsx("p",{children:"It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source."}),s.jsx(l,{loading:e,onClick:()=>y(),children:"get data"}),s.jsx(l,{onClick:()=>n(""),children:"clear data"}),s.jsx("p",{children:p})]})};r.__docgenInfo={description:"",methods:[],displayName:"Example"};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const lazyData = useRef(new LazyBy(fetchData));
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const getData = async () => {
    setLoading(true);
    const result = await lazyData.current.get();
    setData(result);
    setLoading(false);
  };
  return <div style={{
    padding: "20px"
  }}>
            <h2>LazyBy Example</h2>
            <p>
                This demonstrates how the <code>LazyBy</code> utility works by lazily fetching data only when needed.
            </p>
            <p>
                It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source.
            </p>
            <Button loading={loading} onClick={() => getData()}>get data</Button>
            <Button onClick={() => setData("")}>clear data</Button>
            <p>{data}</p>
        </div>;
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["Example"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:x,default:w},Symbol.toStringTag,{value:"Module"}));export{b as L};
