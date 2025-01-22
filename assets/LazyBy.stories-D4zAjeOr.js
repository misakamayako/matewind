var g=Object.defineProperty;var m=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var r=(e,t,n)=>m(e,typeof t!="symbol"?t+"":t,n);import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-CZMpeKRu.js";class x{constructor(t){r(this,"task");r(this,"result");r(this,"promise");r(this,"initialized",!1);this.task=t}async get(){if(!this.initialized)return this.promise===void 0&&(this.promise=(typeof(scheduler==null?void 0:scheduler.postTask)=="function"?scheduler.postTask.bind(scheduler):async t=>t())(async()=>{try{return this.result=await this.task(),this.initialized=!0,this.result}catch(t){throw this.promise=void 0,t}})),this.promise;if(this.result===void 0)throw new Error("Lazy initialization failed. The task did not complete successfully.");return this.result}}const b={},L=async()=>new Promise(e=>{setTimeout(()=>e("Lazy data loaded!"),2e3)}),s=()=>{const[e]=o.useState(()=>new x(L)),[t,n]=o.useState(!1),[l,h]=o.useState(null),[d,c]=o.useState(null),f=async()=>{n(!0),c(null);try{const i=await e.get();h(i)}catch(i){console.log(i),c("Failed to load data.")}finally{n(!1)}};return a.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[a.jsx("h2",{children:"LazyBy Example"}),a.jsxs("p",{children:["This demonstrates how the ",a.jsx("code",{children:"LazyBy"})," utility works by lazily fetching data only when needed."]}),a.jsx("button",{style:{padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",marginBottom:"10px"},onClick:f,children:t?"Loading...":"Load Data"}),l&&a.jsxs("p",{style:{color:"green"},children:["Data: ",l]}),d&&a.jsxs("p",{style:{color:"red"},children:["Error: ",d]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,y,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [lazyData] = useState(() => new LazyBy(fetchData));
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleLoad = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await lazyData.get();
      setData(result);
    } catch (err) {
      console.log(err);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };
  return <div style={{
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  }}>
            <h2>LazyBy Example</h2>
            <p>
          This demonstrates how the <code>LazyBy</code> utility works by lazily
          fetching data only when needed.
            </p>
            <button style={{
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "10px"
    }} onClick={handleLoad}>
                {loading ? "Loading..." : "Load Data"}
            </button>
            {data && <p style={{
      color: "green"
    }}>Data: {data}</p>}
            {error && <p style={{
      color: "red"
    }}>Error: {error}</p>}
        </div>;
}`,...(p=(y=s.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,b as default};
