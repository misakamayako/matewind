var I=r=>{throw TypeError(r)};var y=(r,e,s)=>e.has(r)||I("Cannot "+s);var t=(r,e,s)=>(y(r,e,"read from private field"),s?s.call(r):e.get(r)),c=(r,e,s)=>e.has(r)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,s),a=(r,e,s,n)=>(y(r,e,"write to private field"),n?n.call(r,s):e.set(r,s),s),p=(r,e,s)=>(y(r,e,"access private method"),s);var T=(r,e,s,n)=>({set _(f){a(r,e,f,s)},get _(){return t(r,e,n)}});import{j as i}from"./jsx-runtime-CLpGMVip.js";import{R as x}from"./index-CZMpeKRu.js";import{c as C}from"./client-Dp0ttOjv.js";import"./index-D-TIQtLp.js";const F="_content_1skvc_1",G="_message_1skvc_12",_={content:F,message:G};var l,v,o,m,E,d,B,j;class H{constructor(e=5){c(this,d);c(this,l);c(this,v);c(this,o,[]);c(this,m);c(this,E,0);typeof window>"u"||(a(this,l,document.createElement("div")),a(this,m,e*1e3),document.body.append(t(this,l)),a(this,v,C.createRoot(t(this,l))))}setTime(e){a(this,m,e)}get id(){return T(this,E)._++}error(e){return this.info(e)}info(e){const s=Symbol(this.id.toString()),n={content:e,type:2,id:s};t(this,o).push(n),p(this,d,j).call(this);const f=()=>{p(this,d,B).call(this,s)};return setTimeout(()=>{f()},t(this,m)),f}element(e){return i.jsx("div",{className:_.content,children:e.message.map(s=>i.jsx("div",{children:i.jsx("div",{className:_.message,children:s.content})},s.id.toString()))})}}l=new WeakMap,v=new WeakMap,o=new WeakMap,m=new WeakMap,E=new WeakMap,d=new WeakSet,B=function(e){if(e===void 0)a(this,o,[]);else{const s=t(this,o).findIndex(n=>n.id===e);s>-1&&t(this,o).splice(s,1)}p(this,d,j).call(this)},j=function(){var s;const e=this.element;(s=t(this,v))==null||s.render(i.jsx(e,{message:t(this,o)}))};const u=new H,V={},g=()=>(x.useEffect(()=>{const r=u.info("This is an info message!");return()=>r()},[]),i.jsx("div",{children:"Info Alert is displayed using AlertService."})),h=()=>(x.useEffect(()=>{const r=u.error("This is an error message!");return()=>r()},[]),i.jsx("div",{children:"Error Alert is displayed using AlertService."})),A=()=>(x.useEffect(()=>{const r=u.info("Info message!"),e=u.error("Error message!");return()=>{r(),e()}},[]),i.jsx("div",{children:"Multiple alerts are displayed using AlertService."})),S=()=>(x.useEffect(()=>{u.setTime(1e4);const r=u.info("This alert lasts for 10 seconds!");return()=>r()},[]),i.jsx("div",{children:"Long duration alert is displayed using a custom AlertService."}));var R,L,M;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const remover = AlertService.info("This is an info message!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Info Alert is displayed using AlertService.</div>;
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var w,b,k;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const remover = AlertService.error("This is an error message!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Error Alert is displayed using AlertService.</div>;
}`,...(k=(b=h.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var D,N,O;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const removeInfo = AlertService.info("Info message!");
    const removeError = AlertService.error("Error message!");
    return () => {
      removeInfo();
      removeError();
    };
  }, []);
  return <div>Multiple alerts are displayed using AlertService.</div>;
}`,...(O=(N=A.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var $,q,z;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    AlertService.setTime(10_000);
    const remover = AlertService.info("This alert lasts for 10 seconds!");
    return () => remover(); // 清理消息
  }, []);
  return <div>Long duration alert is displayed using a custom AlertService.</div>;
}`,...(z=(q=S.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const W=["InfoAlert","ErrorAlert","MultipleAlerts","LongDurationAlert"];export{h as ErrorAlert,g as InfoAlert,S as LongDurationAlert,A as MultipleAlerts,W as __namedExportsOrder,V as default};
