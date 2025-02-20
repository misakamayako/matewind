import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as _}from"./index-CZMpeKRu.js";import{F as S}from"./FloatingLabelInput-BA7Awa4f.js";import{O as v}from"./Option-aV1_8Uzj.js";const C="_relative_um6ry_1",R="_block_um6ry_1",j="_contents_um6ry_1",D="_flex_um6ry_1",L="_inline_um6ry_1",k="_table_um6ry_1",E="_truncate_um6ry_1",T="_border_um6ry_1",N="_uppercase_um6ry_1",z="_filter_um6ry_1",I="_tailmateSelectRoot_um6ry_745",M="_tailmateSelectDisplay_um6ry_751",B="_tailmateSelectInput_um6ry_755",O="_tailmateSelectListBoxRoot_um6ry_761",A="_tailmateSelectChevron_um6ry_768",F="_tailmateSelectClearable_um6ry_771",q="_displayText_um6ry_777",G="_open_um6ry_781",H="_noData_um6ry_784",J="_spin_um6ry_1",K="_ping_um6ry_1",P="_pulse_um6ry_1",Q="_bounce_um6ry_1",o={relative:C,static:"_static_um6ry_1","ml-2":"_ml-2_um6ry_1",block:R,contents:j,flex:D,inline:L,"inline-flex":"_inline-flex_um6ry_1",table:k,"h-4":"_h-4_um6ry_1","h-5":"_h-5_um6ry_1","w-4":"_w-4_um6ry_1","w-5":"_w-5_um6ry_1","w-full":"_w-full_um6ry_1","min-w-full":"_min-w-full_um6ry_1","flex-grow":"_flex-grow_um6ry_1","cursor-pointer":"_cursor-pointer_um6ry_1","resize-none":"_resize-none_um6ry_1","flex-row":"_flex-row_um6ry_1","items-center":"_items-center_um6ry_1",truncate:E,"rounded-lg":"_rounded-lg_um6ry_1","rounded-md":"_rounded-md_um6ry_1","rounded-sm":"_rounded-sm_um6ry_1",border:T,"border-0":"_border-0_um6ry_1","border-b":"_border-b_um6ry_1","border-gray-200":"_border-gray-200_um6ry_1","border-transparent":"_border-transparent_um6ry_1","border-zinc-700":"_border-zinc-700_um6ry_1","bg-blue-500":"_bg-blue-500_um6ry_1","bg-gray-200":"_bg-gray-200_um6ry_1","bg-green-500":"_bg-green-500_um6ry_1","bg-purple-500":"_bg-purple-500_um6ry_1","bg-white":"_bg-white_um6ry_1","bg-gradient-to-r":"_bg-gradient-to-r_um6ry_1","from-indigo-500":"_from-indigo-500_um6ry_1","from-white":"_from-white_um6ry_1","from-10%":"_from-10%_um6ry_1","via-sky-500":"_via-sky-500_um6ry_1","via-white":"_via-white_um6ry_1","via-30%":"_via-30%_um6ry_1","to-emerald-500":"_to-emerald-500_um6ry_1","to-white":"_to-white_um6ry_1","to-90%":"_to-90%_um6ry_1","p-0":"_p-0_um6ry_1","px-1":"_px-1_um6ry_1","px-4":"_px-4_um6ry_1","px-6":"_px-6_um6ry_1","py-0.5":"_py-0.5_um6ry_1","py-2":"_py-2_um6ry_1","py-3":"_py-3_um6ry_1","pr-9":"_pr-9_um6ry_1","pb-2":"_pb-2_um6ry_1","pl-3":"_pl-3_um6ry_1","text-left":"_text-left_um6ry_1","text-sm":"_text-sm_um6ry_1","text-xs":"_text-xs_um6ry_1","leading-6":"_leading-6_um6ry_1","leading-normal":"_leading-normal_um6ry_1","font-light":"_font-light_um6ry_1","whitespace-nowrap":"_whitespace-nowrap_um6ry_1","text-blue-500":"_text-blue-500_um6ry_1","text-gray-600":"_text-gray-600_um6ry_1","text-gray-900":"_text-gray-900_um6ry_1",uppercase:N,"shadow-md":"_shadow-md_um6ry_1",filter:z,"transition-colors":"_transition-colors_um6ry_1","duration-300":"_duration-300_um6ry_1","select-none":"_select-none_um6ry_1","placeholder:text-gray-400":"_placeholder:text-gray-400_um6ry_1","hover:border-transparent":"_hover:border-transparent_um6ry_1","hover:bg-gray-100":"_hover:bg-gray-100_um6ry_1","hover:text-white":"_hover:text-white_um6ry_1","hover:underline":"_hover:underline_um6ry_1","focus:shadow-transparent":"_focus:shadow-transparent_um6ry_1",tailmateSelectRoot:I,tailmateSelectDisplay:M,tailmateSelectInput:B,tailmateSelectListBoxRoot:O,tailmateSelectChevron:A,tailmateSelectClearable:F,displayText:q,open:G,noData:H,spin:J,ping:K,pulse:P,bounce:Q};function U(r,l){const n=_.useRef(-1);return _.useEffect(()=>()=>{window.clearTimeout(n.current)},[]),(...i)=>{window.clearTimeout(n.current),n.current=window.setTimeout(()=>r(...i),l)}}function V(r){const{value:l,options:n,multiple:i=!1}=r,[m,y]=_.useState(""),[u,c]=_.useState(new Set),s=_.useMemo(()=>{const e=new Map;return n.forEach(t=>{e.set(t.id,t.label)}),e},[n]);_.useEffect(()=>{l&&Array.isArray(l)?c(new Set(l)):c(l?new Set([l]):new Set)},[l]);const h=_.useMemo(()=>{if(i){const e=[];return u.forEach(t=>{s.has(t)?e.push(String(s.get(t))):e.push(t.toString())}),e.join(",")}else if(u.size!==0){let e="";return u.forEach(t=>{s.has(t)?e=String(s.get(t)):e=t.toString()}),e}else return null},[u,s,i]),[p,d]=_.useState(!1),b=e=>{const t=new Set(u);t.has(e)?t.delete(e):r.multiple?t.add(e):(t.clear(),t.add(e),d(!1),y("")),c(t),r.multiple?r.onChange(Array.from(t)):t.size===0?r.onChange(void 0):r.onChange(e)},f=_.useRef(null);_.useEffect(()=>{const e=t=>{f.current&&!f.current.contains(t.target)&&(d(!1),y(""))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const g=_.useMemo(()=>r.remote?n:n.filter(e=>e.label.toLowerCase().includes(m.toLowerCase())),[m,n,r.remote]),x=U(e=>{r.remote&&r.remote(e)},300),w=e=>{y(e),x(e)};return a.jsxs("div",{className:o.tailmateSelectRoot,ref:f,children:[a.jsxs("div",{className:o.tailmateSelectDisplay,onClick:()=>d(!0),children:[r.multiple||m?null:a.jsx("span",{className:[o.displayText,p||!h?o.open:null].join(" "),children:h??r.placeholder}),r.search?a.jsx(S,{clearable:!0,label:r.label,value:m,onChange:e=>w(e.target.value)}):null]}),p?a.jsx("div",{className:o.tailmateSelectListBoxRoot,children:r.remote&&r.loading?a.jsx("span",{className:o.noData,children:"loading..."}):g.length>0?g.map(e=>a.jsx(v,{current:e,selected:u.has(e.id),onClick:b},e.id)):a.jsx("span",{className:o.noData,children:"no data"})}):null]})}V.__docgenInfo={description:"",methods:[],displayName:"Select"};export{V as S};
