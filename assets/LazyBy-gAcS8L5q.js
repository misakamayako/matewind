import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as a}from"./index-npCMkmsx.js";import{ae as s,af as o}from"./index-CX951A3_.js";import{L as i}from"./LazyBy.stories-99DMmKVq.js";import"./index-CZMpeKRu.js";import"./iframe-D-fHIDiO.js";import"../sb-preview/runtime.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Button-BWSya2Zu.js";import"./FormItem-BrhqolgX.js";import"./FloatingLabelInput-DFFEPAC1.js";import"./Modal-CS3pVmoZ.js";import"./transition-DJ_TwKzC.js";import"./Pager-Ddx2DgsT.js";import"./Select-CwxL0ltO.js";import"./Table-CASTOlGJ.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Utils/LazyBy",of:i}),`
`,t.jsx(n.h1,{id:"lazyby-工具类",children:"LazyBy 工具类"}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"LazyBy"})," 示例演示了如何使用懒加载方法获取数据，并且防止多处同时访问造成资源浪费。"]}),`
`,t.jsx(n.h2,{id:"示例",children:"示例"}),`
`,t.jsx(o,{name:"default"}),`
`,t.jsx(n.h2,{id:"用法",children:"用法"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"LazyBy<T>"}),"构造函数只有一个入参，",t.jsx(n.code,{children:"tast"}),"为获取数据的方法，数据结果需要为非undefined的任何值。"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"lazyBy"}),"实例只有一个方法，",t.jsx(n.code,{children:"instance.get()"}),"返回值为",t.jsx(n.code,{children:"Promise<T>"}),",根据使用时数据获取的情况，有三种行为",`
`,t.jsxs(n.ol,{children:[`
`,t.jsxs(n.li,{children:["当第一次调用时，会唤醒",t.jsx(n.code,{children:"tast"}),"方法获取数据，当成功后，缓存并返回数据;"]}),`
`,t.jsxs(n.li,{children:["当在获取数据中时，复用并返回当前的",t.jsx(n.code,{children:"Promise"}),"，不会发起新的请求;"]}),`
`,t.jsx(n.li,{children:"当获取数据成功后，直接返回缓存值;"}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(n.h2,{id:"使用",children:"使用"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import {useRef, useState} from "react";\r
\r
import {Button,LazyBy} from "matewind";\r
\r
\r
const fetchData = async () => {\r
	// 模拟一个异步任务\r
	return new Promise<string>((resolve) => {\r
		setTimeout(() => resolve("Lazy data loaded!"), 2000);\r
	});\r
};\r
\r
\r
const LazyByExample = () => {\r
	const lazyData = useRef(new LazyBy(fetchData));\r
	const [loading,setLoading] = useState(false);\r
	const [data,setData] = useState("");\r
	const getData = async () => {\r
		setLoading(true);\r
		const result = await lazyData.current.get();\r
		setData(result);\r
		setLoading(false);\r
	};\r
\r
	return (\r
		<div style={{ padding: "20px"}}>\r
			<h2>LazyBy Example</h2>\r
			<p>\r
				This demonstrates how the <code>LazyBy</code> utility works by lazily fetching data only when needed.\r
			</p>\r
			<p>\r
				It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source.\r
			</p>\r
			<Button loading={loading} onClick={()=>getData()}>get data</Button>\r
			<Button onClick={()=>setData("")}>clear data</Button>\r
			<p>{data}</p>\r
		</div>\r
	);\r
};\r

`})})]})}function M(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{M as default};
