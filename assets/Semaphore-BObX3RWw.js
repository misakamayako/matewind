import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DwOlTBOG.js";import{M as o,S as t}from"./index-BmVe8eVL.js";import{S as l}from"./Semaphore.stories-B4EzYE2f.js";import"./index-2yJIXLcc.js";import"./iframe-OXKy6BDs.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-BMswa-Cn.js";import"./Tag-CyvJyZIy.js";import"./FloatingLabelInput-esnStef_.js";import"./Pager-CuikBxut.js";import"./Table-CnUlTgBP.js";import"./Option-D-_hemD3.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utils/Semaphore",of:l}),`
`,e.jsx(n.h1,{id:"semaphore-工具类",children:"Semaphore 工具类"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Semaphore"})," 示例演示了如何使用信号量机制来限制并发请求数量，确保同时只能处理指定数量的请求。"]}),`
`,e.jsx(n.h2,{id:"示例",children:"示例"}),`
`,e.jsx(t,{name:"default"}),`
`,e.jsx(n.h2,{id:"用法",children:"用法"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Semaphore"}),"类只有一个入参，代表信号量的数量，创建成功后不可再修改；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"semaphore"})," 实例有两个方法：",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"acquire 方法"}),"：尝试获取一个许可。如果当前有可用许可，则立即返回一个释放函数；否则等待直到有许可可用。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"release 方法"}),"：释放许可。如果有等待队列，则唤醒队列中下一个等待者；当所有资源已释放时，不会有任何行为。"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"控制并发请求数量",children:"控制并发请求数量"}),`
`,e.jsxs(n.p,{children:["在正式请求前通过 ",e.jsx(n.code,{children:"semaphore.acquire()"})," 方法，你可以限制任意数量（示例中为五个）个请求同时进行。如果当前正在处理的请求数量已经达到最大值，则新的请求将被排队，直到有请求完成（无论成功或失败）并释放信号量。"]}),`
`,e.jsx(n.h2,{id:"注意",children:"注意"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"确保许可释放"})}),`
`,e.jsx(n.p,{children:"为了防止因异常导致许可未释放，建议将业务逻辑置于 try...finally 块中，确保在任务结束后一定调用释放函数，否则有可能导致死锁产生"}),`
`,e.jsx(n.h3,{id:"示例操作",children:"示例操作"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["点击 ",e.jsx(n.strong,{children:"获取信号量"})," 按钮时，排队请求数会增加，正在处理的请求数会增加，直到获取信号量成功。"]}),`
`,e.jsxs(n.li,{children:["点击 ",e.jsx(n.strong,{children:"释放信号量"})," 按钮时，正在处理的请求数会减少，已完成的请求数会从总任务数中减少。示例中，任务不会主动结束并释放信号量。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用",children:"使用"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import {Semaphore} from "matewind"\r
const semaphore = new Semaphore(5)\r
async function demoRequest(){\r
	const release = await semaphore.acquire()\r
	try{\r
			// await some job done\r
	} finally {\r
	  release()\r
		// or semaphore.release()\r
	}\r
}
`})})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};
