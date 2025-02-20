import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as C}from"./index-CZMpeKRu.js";import{B as f}from"./Button-CPzBFJVf.js";import{T as g}from"./Tag-BYYgo5of.js";import"./FloatingLabelInput-CJ0DZAft.js";import"./Pager-D6ozxkmE.js";import"./Table-DomWjCQb.js";import"./Option-_FTdP7sq.js";import"./index-C5atF7ks.js";import"./index-D-TIQtLp.js";const k={title:"Component/Tag",component:g,tags:["autodocs"],argTypes:{onClose:{action:"closed"},children:{control:"text"}}},r={args:{children:"基础标签",onClose:void 0}},o={args:{children:"可关闭标签",onClose:()=>console.log("关闭标签")}},s=()=>{const[x,n]=C.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(f,{onClick:()=>n(!0),children:"reset"})}),e.jsx("p",{children:x?e.jsx(g,{onClose:()=>n(!1),children:e.jsx("span",{style:{color:"red"},children:"点击关闭按钮试试"})}):null})]})};s.storyName="交互示例（点击关闭消失）";var t,a,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const v=["Default","Closable","InteractiveExample"];export{o as Closable,r as Default,s as InteractiveExample,v as __namedExportsOrder,k as default};
