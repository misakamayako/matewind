import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as c}from"./index-npCMkmsx.js";import{M as d}from"./index-iF_pBAbG.js";import"./index-CZMpeKRu.js";import"./iframe-A-QrDaFX.js";import"./index-C5atF7ks.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Utils/UseDebounce"}),`
`,e.jsxs(n.h1,{id:"usedebounce-hook",children:[e.jsx(n.code,{children:"useDebounce"})," Hook"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDebounce"})," 是一个自定义 React Hook，用于防抖处理。它可以延迟函数的执行，直到用户停止触发该函数超过指定的时间，常用于搜索框、输入框等场景，减少不必要的频繁操作。"]}),`
`,e.jsx(n.h2,{id:"用法",children:"用法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {useDebounce} from 'matewind';
`})}),`
`,e.jsx(n.h3,{id:"传入参数",children:"传入参数"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn"}),": 你希望防抖的函数，它将被延迟执行。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay"}),": 延迟时间（以毫秒为单位），即多长时间后才执行 ",e.jsx(n.code,{children:"fn"})," 函数。"]}),`
`]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDebounce"})," 返回一个新的函数，使用时将该函数传递给事件处理器，",e.jsx(n.code,{children:"useDebounce"})," 会自动处理延迟逻辑。"]}),`
`,e.jsx(n.h2,{id:"示例",children:"示例"}),`
`,e.jsx(n.h3,{id:"基本示例",children:"基本示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';\r
import useDebounce from './hooks/useDebounce';\r
\r
function SearchComponent() {\r
  const [searchTerm, setSearchTerm] = useState('');\r
\r
  // 使用 useDebounce 防抖搜索函数\r
  const handleSearch = useDebounce((query: string) => {\r
    console.log('Searching for:', query);\r
    // 在这里你可以发起 API 请求或执行其他操作\r
  }, 500);\r
\r
  return (\r
    <input\r
      type="text"\r
      value={searchTerm}\r
      onChange={(e) => {\r
        setSearchTerm(e.target.value);\r
        handleSearch(e.target.value); // 防抖\r
      }}\r
      placeholder="输入搜索内容..."\r
    />\r
  );\r
}\r
\r
export default SearchComponent;
`})}),`
`,e.jsx(n.h3,{id:"解释",children:"解释"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"handleSearch"})," 是由 ",e.jsx(n.code,{children:"useDebounce"})," 返回的防抖函数，它接收 ",e.jsx(n.code,{children:"query"}),"（即搜索的输入值）作为参数。"]}),`
`,e.jsxs(n.li,{children:["每次输入时，",e.jsx(n.code,{children:"onChange"})," 事件会更新 ",e.jsx(n.code,{children:"searchTerm"})," 状态并调用 ",e.jsx(n.code,{children:"handleSearch"}),"，但 ",e.jsx(n.code,{children:"handleSearch"})," 只会在用户停止输入超过 500 毫秒时执行一次。"]}),`
`]}),`
`,e.jsx(n.h3,{id:"用途",children:"用途"}),`
`,e.jsx(n.p,{children:"此 hook 可以广泛应用于以下场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"输入框的实时搜索"}),"：减少每次输入时都发起 API 请求的频率。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"表单验证"}),"：防止频繁的表单校验调用。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"滚动事件监听"}),"：在用户停止滚动后执行操作（如懒加载等）。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"参数说明",children:"参数说明"}),`
`,e.jsx(n.h3,{id:"fn",children:e.jsx(n.code,{children:"fn"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"(...args: Args) => void"})]}),`
`,e.jsx(n.li,{children:"说明：需要防抖的函数。"}),`
`]}),`
`,e.jsx(n.h3,{id:"delay",children:e.jsx(n.code,{children:"delay"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"说明：防抖的延迟时间，单位为毫秒。"}),`
`]})]})}function m(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const p=[];export{p as __namedExportsOrder,m as default};
