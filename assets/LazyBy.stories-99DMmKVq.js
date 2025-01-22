var m=Object.defineProperty;var f=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e,s)=>f(t,typeof e!="symbol"?e+"":e,s);import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-CZMpeKRu.js";import{B as l}from"./Button-BWSya2Zu.js";import"./FormItem-BrhqolgX.js";import"./FloatingLabelInput-DFFEPAC1.js";import"./Modal-CS3pVmoZ.js";import"./Pager-Ddx2DgsT.js";import"./Select-CwxL0ltO.js";import"./Table-CASTOlGJ.js";class g{constructor(e){i(this,"task");i(this,"result");i(this,"promise");i(this,"initialized",!1);this.task=e}async get(){if(!this.initialized)return this.promise===void 0&&(this.promise=(typeof(scheduler==null?void 0:scheduler.postTask)=="function"?scheduler.postTask.bind(scheduler):async e=>e())(async()=>{try{return this.result=await this.task(),this.initialized=!0,this.result}catch(e){throw this.promise=void 0,e}})),this.promise;if(this.result===void 0)throw new Error("Lazy initialization failed. The task did not complete successfully.");return this.result}}const w={},x=async()=>new Promise(t=>{setTimeout(()=>t("Lazy data loaded!"),2e3)}),r=()=>{const t=o.useRef(new g(x)),[e,s]=o.useState(!1),[p,n]=o.useState(""),y=async()=>{s(!0);const h=await t.current.get();n(h),s(!1)};return a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h2",{children:"LazyBy Example"}),a.jsxs("p",{children:["This demonstrates how the ",a.jsx("code",{children:"LazyBy"})," utility works by lazily fetching data only when needed."]}),a.jsx("p",{children:"It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source."}),a.jsx(l,{loading:e,onClick:()=>y(),children:"get data"}),a.jsx(l,{onClick:()=>n(""),children:"clear data"}),a.jsx("p",{children:p})]})};r.__docgenInfo={description:"",methods:[],displayName:"Example"};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const z=["Example"],v=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{v as L};
