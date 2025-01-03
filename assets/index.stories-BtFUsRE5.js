var I=r=>{throw TypeError(r)};var y=(r,e,s)=>e.has(r)||I("Cannot "+s);var t=(r,e,s)=>(y(r,e,"read from private field"),s?s.call(r):e.get(r)),c=(r,e,s)=>e.has(r)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,s),a=(r,e,s,n)=>(y(r,e,"write to private field"),n?n.call(r,s):e.set(r,s),s),S=(r,e,s)=>(y(r,e,"access private method"),s);var j=(r,e,s,n)=>({set _(A){a(r,e,A,s)},get _(){return t(r,e,n)}});import{j as i}from"./jsx-runtime-BjgbQsUx.js";import{R as _}from"./index-BuYn5Wpo.js";import{c as C}from"./client-DuWvRJoS.js";import"./index-D2MAbzvX.js";import"./index-CTOC-uzv.js";const F="_content_1skvc_1",G="_message_1skvc_12",T={content:F,message:G};var l,h,o,m,E,d,B,x;class H{constructor(e=5){c(this,d);c(this,l);c(this,h);c(this,o,[]);c(this,m);c(this,E,0);typeof window>"u"||(a(this,l,document.createElement("div")),a(this,m,e*1e3),document.body.append(t(this,l)),a(this,h,C.createRoot(t(this,l))))}setTime(e){a(this,m,e)}get id(){return j(this,E)._++}error(e){return this.info(e)}info(e){const s=Symbol(this.id.toString()),n={content:e,type:2,id:s};t(this,o).push(n),S(this,d,x).call(this);const A=()=>{S(this,d,B).call(this,s)};return setTimeout(()=>{A()},t(this,m)),A}element(e){return i.jsx("div",{className:T.content,children:e.message.map(s=>i.jsx("div",{children:i.jsx("div",{className:T.message,children:s.content})},s.id.toString()))})}}l=new WeakMap,h=new WeakMap,o=new WeakMap,m=new WeakMap,E=new WeakMap,d=new WeakSet,B=function(e){if(e===void 0)a(this,o,[]);else{const s=t(this,o).findIndex(n=>n.id===e);s>-1&&t(this,o).splice(s,1)}S(this,d,x).call(this)},x=function(){var s;const e=this.element;(s=t(this,h))==null||s.render(i.jsx(e,{message:t(this,o)}))};const u=new H,W={},p=()=>(_.useEffect(()=>{const r=u.info("This is an info message!");return()=>r()},[]),i.jsx("div",{children:"Info Alert is displayed using AlertService."})),v=()=>(_.useEffect(()=>{const r=u.error("This is an error message!");return()=>r()},[]),i.jsx("div",{children:"Error Alert is displayed using AlertService."})),f=()=>(_.useEffect(()=>{const r=u.info("Info message!"),e=u.error("Error message!");return()=>{r(),e()}},[]),i.jsx("div",{children:"Multiple alerts are displayed using AlertService."})),g=()=>(_.useEffect(()=>{u.setTime(1e4);const r=u.info("This alert lasts for 10 seconds!");return()=>r()},[]),i.jsx("div",{children:"Long duration alert is displayed using a custom AlertService."}));p.__docgenInfo={description:"",methods:[],displayName:"InfoAlert"};v.__docgenInfo={description:"",methods:[],displayName:"ErrorAlert"};f.__docgenInfo={description:"",methods:[],displayName:"MultipleAlerts"};g.__docgenInfo={description:"",methods:[],displayName:"LongDurationAlert"};var R,L,N;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const remover = AlertService.info("This is an info message!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Info Alert is displayed using AlertService.</div>;
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,w,D;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const remover = AlertService.error("This is an error message!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Error Alert is displayed using AlertService.</div>;
}`,...(D=(w=v.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var b,k,O;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const removeInfo = AlertService.info("Info message!");
    const removeError = AlertService.error("Error message!");
    return () => {
      removeInfo();
      removeError();
    };
  }, []);
  return <div>Multiple alerts are displayed using AlertService.</div>;
}`,...(O=(k=f.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,q,z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    AlertService.setTime(10_000);
    const remover = AlertService.info("This alert lasts for 10 seconds!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Long duration alert is displayed using a custom AlertService.</div>;
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const X=["InfoAlert","ErrorAlert","MultipleAlerts","LongDurationAlert"];export{v as ErrorAlert,p as InfoAlert,g as LongDurationAlert,f as MultipleAlerts,X as __namedExportsOrder,W as default};
