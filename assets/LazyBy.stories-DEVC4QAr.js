var m=Object.defineProperty;var f=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var r=(a,t,e)=>f(a,typeof t!="symbol"?t+"":t,e);import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-2yJIXLcc.js";import{B as l}from"./Button-BMswa-Cn.js";import"./Tag-CyvJyZIy.js";import"./FloatingLabelInput-esnStef_.js";import"./Pager-CuikBxut.js";import"./Table-CnUlTgBP.js";import"./Option-D-_hemD3.js";class g{constructor(t){r(this,"task");r(this,"result");r(this,"promise");r(this,"initialized",!1);this.task=t}async get(){if(!this.initialized){if(this.promise===void 0){const t=typeof(scheduler==null?void 0:scheduler.postTask)=="function"?scheduler.postTask.bind(scheduler):async e=>e();this.promise=t(async()=>{try{return this.result=await this.task(),this.initialized=!0,this.result}catch(e){throw this.promise=void 0,e}})}return this.promise}if(this.result===void 0)throw new Error("Lazy initialization failed. The task did not complete successfully.");return this.result}}const w={title:"UTILS/LazyBy"},z=async()=>new Promise(a=>{setTimeout(()=>a("Lazy data loaded!"),2e3)}),o=()=>{const a=i.useRef(new g(z)),[t,e]=i.useState(!1),[p,n]=i.useState(""),y=async()=>{e(!0);const h=await a.current.get();n(h),e(!1)};return s.jsxs("div",{style:{padding:"20px"},children:[s.jsx("h2",{children:"LazyBy Example"}),s.jsxs("p",{children:["This demonstrates how the ",s.jsx("code",{children:"LazyBy"})," utility works by lazily fetching data only when needed."]}),s.jsx("p",{children:"It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source."}),s.jsx(l,{loading:t,onClick:()=>y(),children:"get data"}),s.jsx(l,{onClick:()=>n(""),children:"clear data"}),s.jsx("p",{children:p})]})};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["Example"],_=Object.freeze(Object.defineProperty({__proto__:null,Example:o,__namedExportsOrder:x,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as L};
