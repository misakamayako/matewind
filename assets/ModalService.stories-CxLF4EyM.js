var S=o=>{throw TypeError(o)};var w=(o,e,n)=>e.has(o)||S("Cannot "+n);var l=(o,e,n)=>(w(o,e,"read from private field"),n?n.call(o):e.get(o)),i=(o,e,n)=>e.has(o)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,n),d=(o,e,n,r)=>(w(o,e,"write to private field"),r?r.call(o,n):e.set(o,n),n),M=(o,e,n)=>(w(o,e,"access private method"),n);import{j as t}from"./jsx-runtime-CLpGMVip.js";import{c as q}from"./client-Dp0ttOjv.js";import{r as A}from"./index-CZMpeKRu.js";import"./Button-CPzBFJVf.js";import{b,M as L}from"./Tag-BYYgo5of.js";import{F as O}from"./FloatingLabelInput-CJ0DZAft.js";import"./Pager-D6ozxkmE.js";import"./Table-DomWjCQb.js";import"./Option-_FTdP7sq.js";import"./index-D-TIQtLp.js";import"./index-C5atF7ks.js";const x=o=>{const[e,n]=A.useState("");return t.jsx(O,{value:e,onChange:r=>{n(r.target.value),o.setValue(r.target.value)}})};try{x.displayName="PrivateInput",x.__docgenInfo={description:"",displayName:"PrivateInput",props:{setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"(value: string) => void"}}}}}catch{}var a,p,c,u,y;class ${constructor(){i(this,u);i(this,a);i(this,p);i(this,c,!1);typeof window>"u"||(d(this,a,document.createElement("div")),document.body.append(l(this,a)),d(this,p,q.createRoot(l(this,a))))}show(e){return l(this,c)?Promise.reject("当前已有弹窗，不能新增了"):new Promise((n,r)=>{const s={children:e.children,onClose:v=>{switch(v){case b.cancel:r("cancel");break;case b.close:r("");break;case b.confirm:n()}d(this,c,!1),s.open=!1,M(this,u,y).call(this,s)},title:e.title,showCancel:e.showCancel,open:!0};d(this,c,!0),M(this,u,y).call(this,s)})}prompt(e){return new Promise((n,r)=>{let s="";const R={children:t.jsx(x,{setValue:g=>s=g}),showCancel:!0,title:e};this.show(R).then(()=>n(s)).catch(g=>{r(g)})})}confirm(e){return new Promise(n=>{const r={showCancel:!0,title:e};this.show(r).then(()=>n(!0)).catch(()=>{n(!1)})})}}a=new WeakMap,p=new WeakMap,c=new WeakMap,u=new WeakSet,y=function(e){var n;(n=l(this,p))==null||n.render(t.jsx(L,{...e,children:e.children}))};const C=new $,Y={},m=()=>{const o=()=>{C.show({title:"普通弹窗",children:t.jsx("p",{children:"这是一个普通弹窗的内容。"})}).catch(()=>{console.log("弹窗已关闭")})};return t.jsx("button",{className:"px-4 py-2 bg-blue-500  rounded-sm",onClick:o,children:"显示弹窗"})},h=()=>{const o=async()=>{const e=await C.confirm("你确定要继续吗？");console.log(e?"用户点击了确认":"用户取消了操作")};return t.jsx("button",{className:"px-4 py-2 bg-green-500  rounded-sm",onClick:o,children:"显示确认弹窗"})},f=()=>{const o=async()=>{try{const e=await C.prompt("请输入您的名字：");console.log("用户输入了：",e)}catch{console.log("用户取消了输入")}};return t.jsx("button",{className:"px-4 py-2 bg-purple-500  rounded-sm",onClick:o,children:"显示输入弹窗"})};var P,_,j;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var k,N,I;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(I=(N=h.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var V,E,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const Z=["ShowModal","ConfirmModal","PromptModal"];export{h as ConfirmModal,f as PromptModal,m as ShowModal,Z as __namedExportsOrder,Y as default};
