import{j as e}from"./jsx-runtime-CLpGMVip.js";function l(s){return e.jsxs("table",{className:"min-w-full bg-white border border-gray-200 rounded-lg shadow-md",children:[e.jsx("thead",{className:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal",children:e.jsx("tr",{children:s.columns.map((r,a)=>e.jsx("th",{className:"py-3 px-6 text-left",style:{width:r.width},children:r.title},a))})}),e.jsx("tbody",{className:"text-gray-600 text-sm font-light",children:s.dataSource.map((r,a)=>e.jsx("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:s.columns.map((t,n)=>e.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:t.props?r[t.props]:t.renderCell?t.renderCell(r,a):null},`${a}-${n}`))},a))})]})}l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig",elements:[{name:"T"}],raw:"ColumnConfig<T>"}],raw:"ColumnConfig<T>[]"},description:""},strip:{required:!1,tsType:{name:"boolean"},description:""}}};export{l as T};
