import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as o}from"./Table-CnUlTgBP.js";const w={component:o},a=[{id:1,name:"John Doe",age:28,address:"123 Main St"},{id:2,name:"Jane Smith",age:34,address:"456 Elm St"},{id:3,name:"Alice Johnson",age:45,address:"789 Oak St"}],n=[{title:"ID",props:"id",width:"50px"},{title:"Name",props:"name",width:"150px"},{title:"Age",props:"age",width:"80px"},{title:"Address",props:"address"}],e=()=>r.jsx(o,{columns:n,dataSource:a}),t=()=>{const x=[...n,{title:"Actions",renderCell:h=>r.jsx("button",{className:"text-blue-500 hover:underline",onClick:()=>alert(`Edit row: ${h.id}`),children:"Edit"}),width:"100px"}];return r.jsx(o,{columns:x,dataSource:a})},s=()=>r.jsx(o,{strip:!0,columns:n,dataSource:a});var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"() => <Table columns={columns} dataSource={dataSource} />",...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const customColumns: ColumnConfig<RowData>[] = [...columns, {
    title: "Actions",
    renderCell: row => <button className="text-blue-500 hover:underline" onClick={() => alert(\`Edit row: \${row.id}\`)}>
            Edit
                </button>,
    width: "100px"
  }];
  return <Table columns={customColumns} dataSource={dataSource} />;
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"() => <Table strip columns={columns} dataSource={dataSource} />",...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const g=["BasicTable","TableWithCustomRender","StripedTable"];export{e as BasicTable,s as StripedTable,t as TableWithCustomRender,g as __namedExportsOrder,w as default};
