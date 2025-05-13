import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-2yJIXLcc.js";import{B as h}from"./Button-BMswa-Cn.js";import{T as g}from"./Tag-CyvJyZIy.js";import"./FloatingLabelInput-esnStef_.js";import"./Pager-CuikBxut.js";import"./Table-CnUlTgBP.js";import"./Option-D-_hemD3.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";const v={title:"Component/Tag",component:g,tags:["autodocs"],argTypes:{onClose:{action:"closed"},children:{control:"text"}}},r={args:{children:"基础标签",onClose:void 0}},o={args:{children:"可关闭标签",onClose:()=>console.log("关闭标签")}},s=()=>{const[x,t]=C.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(h,{onClick:()=>t(!0),children:"reset"})}),e.jsx("p",{children:x?e.jsx(g,{onClose:()=>t(!1),children:e.jsx("span",{style:{color:"red"},children:"点击关闭按钮试试"})}):null})]})};s.storyName="交互示例（点击关闭消失）";var n,a,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "基础标签",
    onClose: undefined
  }
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "可关闭标签",
    onClose: () => console.log("关闭标签")
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isVisible, setIsVisible] = useState(true);
  return <>
            <p><Button onClick={() => setIsVisible(true)}>reset</Button></p>
            <p>
                {isVisible ? <Tag onClose={() => setIsVisible(false)}>
                        <span style={{
          color: "red"
        }}>点击关闭按钮试试</span>
                    </Tag> : null}
            </p>
        </>;
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Default","Closable","InteractiveExample"];export{o as Closable,r as Default,s as InteractiveExample,k as __namedExportsOrder,v as default};
