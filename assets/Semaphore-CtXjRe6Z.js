import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-npCMkmsx.js";import{ae as s,af as t}from"./index-CX951A3_.js";import{S as c}from"./Semaphore.stories-Dan8gw_0.js";import"./index-CZMpeKRu.js";import"./iframe-D-fHIDiO.js";import"../sb-preview/runtime.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Button-BWSya2Zu.js";import"./FormItem-BrhqolgX.js";import"./FloatingLabelInput-DFFEPAC1.js";import"./Modal-CS3pVmoZ.js";import"./transition-DJ_TwKzC.js";import"./Pager-Ddx2DgsT.js";import"./Select-CwxL0ltO.js";import"./Table-CASTOlGJ.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utils/Semaphore",of:c}),`
`,e.jsx(r.h1,{id:"semaphore-工具类",children:"Semaphore 工具类"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Semaphore"})," 示例演示了如何使用信号量机制来限制并发请求数量，确保同时只能处理指定数量的请求。"]}),`
`,e.jsx(r.h2,{id:"示例",children:"示例"}),`
`,e.jsx(t,{name:"default"}),`
`,e.jsx(r.h2,{id:"用法",children:"用法"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Semaphore"}),"类只有一个入参，代表信号量的数量，创建成功后不可再修改；"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"semaphore"})," 实例主要包括两个方法，一个是获取信号量",e.jsx(r.code,{children:"acquire"}),"，另一个是释放信号量",e.jsx(r.code,{children:"release"}),'，当 "获取信号量" 时，代码会请求获取信号量，有空闲资源时，会为当前方法分配1个信号量，资源不足时，当前任务会进入等待。当"释放信号量" 时，信号量会增加一个，如任务队列不为空，将按照先进先出的原则分配信号量并释放锁']}),`
`]}),`
`,e.jsx(r.h2,{id:"控制并发请求数量",children:"控制并发请求数量"}),`
`,e.jsxs(r.p,{children:["在正式请求前通过 ",e.jsx(r.code,{children:"semaphore.acquire()"})," 方法，你可以限制任意数量（示例中为三个）个请求同时进行。如果当前正在处理的请求数量已经达到最大值，则新的请求将被排队，直到有请求完成（成功或失败）并释放信号量。"]}),`
`,e.jsx(r.h3,{id:"示例操作",children:"示例操作"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:["点击 ",e.jsx(r.strong,{children:"获取信号量"})," 按钮时，排队请求数会增加，正在处理的请求数会增加，直到获取信号量成功。"]}),`
`,e.jsxs(r.li,{children:["点击 ",e.jsx(r.strong,{children:"释放信号量"})," 按钮时，正在处理的请求数会减少，已完成的请求数会从总任务数中减少。示例中，任务不会主动结束并释放信号量。"]}),`
`]}),`
`,e.jsx(r.h2,{id:"使用",children:"使用"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import {Semaphore} from "matewind"\r
const semaphore = new Semaphore(5)\r
async function demoRequest(){\r
	await semaphore.acquire()\r
	setTimeout(()=>{\r
		semaphore.release()\r
	},1000)\r
}
`})})]})}function R(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{R as default};
