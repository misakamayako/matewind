var S=o=>{throw TypeError(o)};var w=(o,e,n)=>e.has(o)||S("Cannot "+n);var l=(o,e,n)=>(w(o,e,"read from private field"),n?n.call(o):e.get(o)),i=(o,e,n)=>e.has(o)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,n),d=(o,e,n,t)=>(w(o,e,"write to private field"),t?t.call(o,n):e.set(o,n),n),M=(o,e,n)=>(w(o,e,"access private method"),n);import{j as r}from"./jsx-runtime-CLpGMVip.js";import{r as R}from"./index-CZMpeKRu.js";import{c as A}from"./client-C_1asHPD.js";import{F as L}from"./FloatingLabelInput-DFFEPAC1.js";import{a as b,M as O}from"./Modal-CS3pVmoZ.js";import"./index-D-TIQtLp.js";import"./Button-BWSya2Zu.js";import"./transition-DJ_TwKzC.js";import"./index-2nx3i45w.js";var a,h,c,f,x;class ${constructor(){i(this,f);i(this,a);i(this,h);i(this,c,!1);typeof window>"u"||(d(this,a,document.createElement("div")),document.body.append(l(this,a)),d(this,h,A.createRoot(l(this,a))))}show(e){return l(this,c)?Promise.reject("当前已有弹窗，不能新增了"):new Promise((n,t)=>{const s={children:e.children,onClose:y=>{switch(y){case b.cancel:t("cancel");break;case b.close:t("");break;case b.confirm:n()}d(this,c,!1),s.open=!1,M(this,f,x).call(this,s)},title:e.title,showCancel:e.showCancel,open:!0};d(this,c,!0),M(this,f,x).call(this,s)})}prompt(e){return new Promise((n,t)=>{let s="";const F={children:r.jsx(q,{setValue:g=>s=g}),showCancel:!0,title:e};this.show(F).then(()=>n(s)).catch(g=>{t(g)})})}confirm(e){return new Promise(n=>{const t={showCancel:!0,title:e};this.show(t).then(()=>n(!0)).catch(()=>{n(!1)})})}}a=new WeakMap,h=new WeakMap,c=new WeakMap,f=new WeakSet,x=function(e){var n;(n=l(this,h))==null||n.render(r.jsx(O,{...e,children:e.children}))};const C=new $,q=o=>{const[e,n]=R.useState("");return r.jsx(L,{value:e,onChange:t=>{n(t.target.value),o.setValue(t.target.value)}})},W={},m=()=>{const o=()=>{C.show({title:"普通弹窗",children:r.jsx("p",{children:"这是一个普通弹窗的内容。"})}).catch(()=>{console.log("弹窗已关闭")})};return r.jsx("button",{className:"px-4 py-2 bg-blue-500  rounded-sm",onClick:o,children:"显示弹窗"})},p=()=>{const o=async()=>{const e=await C.confirm("你确定要继续吗？");console.log(e?"用户点击了确认":"用户取消了操作")};return r.jsx("button",{className:"px-4 py-2 bg-green-500  rounded-sm",onClick:o,children:"显示确认弹窗"})},u=()=>{const o=async()=>{try{const e=await C.prompt("请输入您的名字：");console.log("用户输入了：",e)}catch{console.log("用户取消了输入")}};return r.jsx("button",{className:"px-4 py-2 bg-purple-500  rounded-sm",onClick:o,children:"显示输入弹窗"})};m.__docgenInfo={description:"",methods:[],displayName:"ShowModal"};p.__docgenInfo={description:"",methods:[],displayName:"ConfirmModal"};u.__docgenInfo={description:"",methods:[],displayName:"PromptModal"};var v,P,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const handleShowModal = () => {
    ModalService.show({
      title: "普通弹窗",
      children: <p>这是一个普通弹窗的内容。</p>
    }).catch(() => {
      console.log("弹窗已关闭");
    });
  };
  return <button className="px-4 py-2 bg-blue-500  rounded-sm" onClick={handleShowModal}>
        显示弹窗
        </button>;
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,_,k;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const handleConfirmModal = async () => {
    const confirmed = await ModalService.confirm("你确定要继续吗？");
    if (confirmed) {
      console.log("用户点击了确认");
    } else {
      console.log("用户取消了操作");
    }
  };
  return <button className="px-4 py-2 bg-green-500  rounded-sm" onClick={handleConfirmModal}>
        显示确认弹窗
        </button>;
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var I,E,V;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const handlePromptModal = async () => {
    try {
      const result = await ModalService.prompt("请输入您的名字：");
      console.log("用户输入了：", result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log("用户取消了输入");
    }
  };
  return <button className="px-4 py-2 bg-purple-500  rounded-sm" onClick={handlePromptModal}>
        显示输入弹窗
        </button>;
}`,...(V=(E=u.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const X=["ShowModal","ConfirmModal","PromptModal"];export{p as ConfirmModal,u as PromptModal,m as ShowModal,X as __namedExportsOrder,W as default};
