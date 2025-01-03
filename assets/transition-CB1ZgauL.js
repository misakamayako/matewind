import{r as u,R as E,a as we}from"./index-BuYn5Wpo.js";import{r as Qe}from"./index-D3Kh2uYK.js";var Ze=Object.defineProperty,et=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t,n)=>(et(e,typeof t!="symbol"?t+"":t,n),n);let tt=class{constructor(){le(this,"current",this.detect()),le(this,"handoffState","pending"),le(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},M=new tt;function de(e){return M.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Ae(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function O(){let e=[],t={addEventListener(n,r,l,i){return n.addEventListener(r,l,i),t.add(()=>n.removeEventListener(r,l,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ae(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=O();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function Oe(){let[e]=u.useState(O);return u.useEffect(()=>()=>e.dispose(),[e]),e}let w=(e,t)=>{M.isServer?u.useEffect(e,t):u.useLayoutEffect(e,t)};function k(e){let t=u.useRef(e);return w(()=>{t.current=e},[e]),t}let $=function(e){let t=k(e);return E.useCallback((...n)=>t.current(...n),[t])},nt=u.createContext(void 0);function rt(){return u.useContext(nt)}function ie(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function V(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}var Te=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Te||{}),A=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(A||{});function j(){let e=ot();return u.useCallback(t=>lt({mergeRefs:e,...t}),[e])}function lt({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:i=!0,name:a,mergeRefs:s}){s=s??it;let o=Fe(t,e);if(i)return X(o,n,r,a,s);let d=l??0;if(d&2){let{static:c=!1,...p}=o;if(c)return X(p,n,r,a,s)}if(d&1){let{unmount:c=!0,...p}=o;return V(c?0:1,{0(){return null},1(){return X({...p,hidden:!0,style:{display:"none"}},n,r,a,s)}})}return X(o,n,r,a,s)}function X(e,t={},n,r,l){let{as:i=n,children:a,refName:s="ref",...o}=oe(e,["unmount","static"]),d=e.ref!==void 0?{[s]:e.ref}:{},c=typeof a=="function"?a(t):a;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let p={};if(t){let m=!1,f=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(m=!0),g===!0&&f.push(h.replace(/([A-Z])/g,v=>`-${v.toLowerCase()}`));if(m){p["data-headlessui-state"]=f.join(" ");for(let h of f)p[`data-${h}`]=""}}if(i===u.Fragment&&(Object.keys(N(o)).length>0||Object.keys(N(p)).length>0))if(!u.isValidElement(c)||Array.isArray(c)&&c.length>1){if(Object.keys(N(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(N(o)).concat(Object.keys(N(p))).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`))}else{let m=c.props,f=m==null?void 0:m.className,h=typeof f=="function"?(...S)=>ie(f(...S),o.className):ie(f,o.className),g=h?{className:h}:{},v=Fe(c.props,N(oe(o,["ref"])));for(let S in p)S in v&&delete p[S];return u.cloneElement(c,Object.assign({},v,p,d,{ref:l(at(c),d.ref)},g))}return u.createElement(i,Object.assign({},oe(o,["ref"]),i!==u.Fragment&&d,i!==u.Fragment&&p),c)}function ot(){let e=u.useRef([]),t=u.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function it(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function Fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[l=>{var i;return(i=l==null?void 0:l.preventDefault)==null?void 0:i.call(l)}]);for(let r in n)Object.assign(t,{[r](l,...i){let a=n[r];for(let s of a){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;s(l,...i)}}});return t}function mn(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];for(let r in n)Object.assign(t,{[r](...l){let i=n[r];for(let a of i)a==null||a(...l)}});return t}function T(e){var t;return Object.assign(u.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function N(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function oe(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function at(e){return E.version.split(".")[0]>="19"?e.props.ref:e.ref}let ut="span";var st=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(st||{});function ct(e,t){var n;let{features:r=1,...l}=e,i={ref:t,"aria-hidden":(r&2)===2?!0:(n=l["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return j()({ourProps:i,theirProps:l,slot:{},defaultTag:ut,name:"Hidden"})}let hn=T(ct),Ne=Symbol();function dt(e,t=!0){return Object.assign(e,{[Ne]:t})}function H(...e){let t=u.useRef(e);u.useEffect(()=>{t.current=e},[e]);let n=$(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Ne]))?void 0:n}let K=u.createContext(null);K.displayName="DescriptionContext";function Re(){let e=u.useContext(K);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Re),t}return e}function vn(){var e,t;return(t=(e=u.useContext(K))==null?void 0:e.value)!=null?t:void 0}function gn(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(i=>(t(a=>[...a,i]),()=>t(a=>{let s=a.slice(),o=s.indexOf(i);return o!==-1&&s.splice(o,1),s}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return E.createElement(K.Provider,{value:l},n.children)},[t])]}let ft="p";function pt(e,t){let n=u.useId(),r=rt(),{id:l=`headlessui-description-${n}`,...i}=e,a=Re(),s=H(t);w(()=>a.register(l),[l,a.register]);let o=r||!1,d=u.useMemo(()=>({...a.slot,disabled:o}),[a.slot,o]),c={ref:s,...a.props,id:l};return j()({ourProps:c,theirProps:i,slot:d,defaultTag:ft,name:a.name||"Description"})}let mt=T(pt),En=Object.assign(mt,{});var ht=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ht||{});let vt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Le(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...i){let a=t[l].call(n,...i);a&&(n=a,r.forEach(s=>s()))}}}function Me(e){return u.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let gt=new vt(()=>Le(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function fe(e,t){let n=gt.get(t),r=u.useId(),l=Me(n);if(w(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let i=l.indexOf(r),a=l.length;return i===-1&&(i=a,a+=1),i===a-1}let ae=new Map,W=new Map;function $e(e){var t;let n=(t=W.get(e))!=null?t:0;return W.set(e,n+1),n!==0?()=>Se(e):(ae.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>Se(e))}function Se(e){var t;let n=(t=W.get(e))!=null?t:1;if(n===1?W.delete(e):W.set(e,n-1),n!==1)return;let r=ae.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,ae.delete(e))}function yn(e,{allowed:t,disallowed:n}={}){let r=fe(e,"inert-others");w(()=>{var l,i;if(!r)return;let a=O();for(let o of(l=n==null?void 0:n())!=null?l:[])o&&a.add($e(o));let s=(i=t==null?void 0:t())!=null?i:[];for(let o of s){if(!o)continue;let d=de(o);if(!d)continue;let c=o.parentElement;for(;c&&c!==d.body;){for(let p of c.children)s.some(m=>p.contains(m))||a.add($e(p));c=c.parentElement}}return a.dispose},[r,t,n])}function wn(e,t,n){let r=k(l=>{let i=l.getBoundingClientRect();i.x===0&&i.y===0&&i.width===0&&i.height===0&&n()});u.useEffect(()=>{if(!e)return;let l=t===null?null:t instanceof HTMLElement?t:t.current;if(!l)return;let i=O();if(typeof ResizeObserver<"u"){let a=new ResizeObserver(()=>r.current(l));a.observe(l),i.add(()=>a.disconnect())}if(typeof IntersectionObserver<"u"){let a=new IntersectionObserver(()=>r.current(l));a.observe(l),i.add(()=>a.disconnect())}return()=>i.dispose()},[t,r,e])}let ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),Et=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var bt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(bt||{}),yt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(yt||{}),wt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(wt||{});function je(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ue)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function $t(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Et)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{});function St(e,t=0){var n;return e===((n=de(e))==null?void 0:n.body)?!1:V(t,{0(){return e.matches(ue)},1(){let r=e;for(;r!==null;){if(r.matches(ue))return!0;r=r.parentElement}return!1}})}var Ct=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ct||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function $n(e){e==null||e.focus({preventScroll:!0})}let Pt=["textarea","input"].join(",");function xt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Pt))!=null?n:!1}function At(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),i=t(r);if(l===null||i===null)return 0;let a=l.compareDocumentPosition(i);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Sn(e,t){return Ot(je(),t,{relativeTo:e})}function Ot(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?At(e):e:t&64?$t(e):je(e);l.length>0&&a.length>1&&(a=a.filter(f=>!l.some(h=>h!=null&&"current"in h?(h==null?void 0:h.current)===f:h===f))),r=r??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,p=a.length,m;do{if(c>=p||c+p<=0)return 0;let f=o+c;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}m=a[f],m==null||m.focus(d),c+=s}while(m!==i.activeElement);return t&6&&xt(m)&&m.select(),2}function He(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Tt(){return/Android/gi.test(window.navigator.userAgent)}function Ft(){return He()||Tt()}function _(e,t,n,r){let l=k(n);u.useEffect(()=>{if(!e)return;function i(a){l.current(a)}return document.addEventListener(t,i,r),()=>document.removeEventListener(t,i,r)},[e,t,r])}function Nt(e,t,n,r){let l=k(n);u.useEffect(()=>{if(!e)return;function i(a){l.current(a)}return window.addEventListener(t,i,r),()=>window.removeEventListener(t,i,r)},[e,t,r])}const Ce=30;function Cn(e,t,n){let r=fe(e,"outside-click"),l=k(n),i=u.useCallback(function(o,d){if(o.defaultPrevented)return;let c=d(o);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let p=function m(f){return typeof f=="function"?m(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let m of p)if(m!==null&&(m.contains(c)||o.composed&&o.composedPath().includes(m)))return;return!St(c,ke.Loose)&&c.tabIndex!==-1&&o.preventDefault(),l.current(o,c)},[l,t]),a=u.useRef(null);_(r,"pointerdown",o=>{var d,c;a.current=((c=(d=o.composedPath)==null?void 0:d.call(o))==null?void 0:c[0])||o.target},!0),_(r,"mousedown",o=>{var d,c;a.current=((c=(d=o.composedPath)==null?void 0:d.call(o))==null?void 0:c[0])||o.target},!0),_(r,"click",o=>{Ft()||a.current&&(i(o,()=>a.current),a.current=null)},!0);let s=u.useRef({x:0,y:0});_(r,"touchstart",o=>{s.current.x=o.touches[0].clientX,s.current.y=o.touches[0].clientY},!0),_(r,"touchend",o=>{let d={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};if(!(Math.abs(d.x-s.current.x)>=Ce||Math.abs(d.y-s.current.y)>=Ce))return i(o,()=>o.target instanceof HTMLElement?o.target:null)},!0),Nt(r,"blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function De(...e){return u.useMemo(()=>de(...e),[...e])}function Rt(){let e;return{before({doc:t}){var n;let r=t.documentElement,l=(n=t.defaultView)!=null?n:window;e=Math.max(0,l.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,l=Math.max(0,r.clientWidth-r.offsetWidth),i=Math.max(0,e-l);n.style(r,"paddingRight",`${i}px`)}}}function Lt(){return He()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(i=>i()).some(i=>i.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let s=O();s.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>s.dispose()))}let i=(l=window.scrollY)!=null?l:window.pageYOffset,a=null;t.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let o=s.target.closest("a");if(!o)return;let{hash:d}=new URL(o.href),c=e.querySelector(d);c&&!r(c)&&(a=c)}catch{}},!0),t.addEventListener(e,"touchstart",s=>{if(s.target instanceof HTMLElement)if(r(s.target)){let o=s.target;for(;o.parentElement&&r(o.parentElement);)o=o.parentElement;t.style(o,"overscrollBehavior","contain")}else t.style(s.target,"touchAction","none")}),t.addEventListener(e,"touchmove",s=>{if(s.target instanceof HTMLElement){if(s.target.tagName==="INPUT")return;if(r(s.target)){let o=s.target;for(;o.parentElement&&o.dataset.headlessuiPortal!==""&&!(o.scrollHeight>o.clientHeight||o.scrollWidth>o.clientWidth);)o=o.parentElement;o.dataset.headlessuiPortal===""&&s.preventDefault()}else s.preventDefault()}},{passive:!1}),t.add(()=>{var s;let o=(s=window.scrollY)!=null?s:window.pageYOffset;i!==o&&window.scrollTo(0,i),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}:{}}function Mt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function jt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let R=Le(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:O(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:jt(n)},l=[Lt(),Rt(),Mt()];l.forEach(({before:i})=>i==null?void 0:i(r)),l.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&R.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&R.dispatch("TEARDOWN",n)}});function kt(e,t,n=()=>({containers:[]})){let r=Me(R),l=t?r.get(t):void 0,i=l?l.count>0:!1;return w(()=>{if(!(!t||!e))return R.dispatch("PUSH",t,n),()=>R.dispatch("POP",t,n)},[e,t]),i}function Pn(e,t,n=()=>[document.body]){let r=fe(e,"scroll-lock");kt(r,t,l=>{var i;return{containers:[...(i=l.containers)!=null?i:[],n]}})}function Ht(e=0){let[t,n]=u.useState(e),r=u.useCallback(o=>n(o),[t]),l=u.useCallback(o=>n(d=>d|o),[t]),i=u.useCallback(o=>(t&o)===o,[t]),a=u.useCallback(o=>n(d=>d&~o),[n]),s=u.useCallback(o=>n(d=>d^o),[n]);return{flags:t,setFlag:r,addFlag:l,hasFlag:i,removeFlag:a,toggleFlag:s}}var Dt={},Pe,xe;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Pe=process==null?void 0:Dt)==null?void 0:Pe.NODE_ENV)==="test"&&typeof((xe=Element==null?void 0:Element.prototype)==null?void 0:xe.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var It=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(It||{});function Ut(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function _t(e,t,n,r){let[l,i]=u.useState(n),{hasFlag:a,addFlag:s,removeFlag:o}=Ht(e&&l?3:0),d=u.useRef(!1),c=u.useRef(!1),p=Oe();return w(()=>{var m;if(e){if(n&&i(!0),!t){n&&s(3);return}return(m=r==null?void 0:r.start)==null||m.call(r,n),Wt(t,{inFlight:d,prepare(){c.current?c.current=!1:c.current=d.current,d.current=!0,!c.current&&(n?(s(3),o(4)):(s(4),o(2)))},run(){c.current?n?(o(3),s(4)):(o(4),s(3)):n?o(1):s(1)},done(){var f;c.current&&typeof t.getAnimations=="function"&&t.getAnimations().length>0||(d.current=!1,o(7),n||i(!1),(f=r==null?void 0:r.end)==null||f.call(r,n))}})}},[e,n,t,p]),e?[l,{closed:a(1),enter:a(2),leave:a(4),transition:a(2)||a(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Wt(e,{prepare:t,run:n,done:r,inFlight:l}){let i=O();return qt(e,{prepare:t,inFlight:l}),i.nextFrame(()=>{n(),i.requestAnimationFrame(()=>{i.add(Vt(e,r))})}),i.dispose}function Vt(e,t){var n,r;let l=O();if(!e)return l.dispose;let i=!1;l.add(()=>{i=!0});let a=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(s=>s instanceof CSSTransition))!=null?r:[];return a.length===0?(t(),l.dispose):(Promise.allSettled(a.map(s=>s.finished)).then(()=>{i||t()}),l.dispose)}function qt(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let z=u.createContext(null);z.displayName="OpenClosedContext";var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function Ie(){return u.useContext(z)}function Bt({value:e,children:t}){return E.createElement(z.Provider,{value:e},t)}function xn({children:e}){return E.createElement(z.Provider,{value:null},e)}function Gt(e){let t=$(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,Ae(()=>{n.current&&t()})}),[t])}function Yt(){let e=typeof document>"u";return"useSyncExternalStore"in we?(t=>t.useSyncExternalStore)(we)(()=>()=>{},()=>!1,()=>!e):!1}function pe(){let e=Yt(),[t,n]=u.useState(M.isHandoffComplete);return t&&M.isHandoffComplete===!1&&n(!1),u.useEffect(()=>{t!==!0&&n(!0)},[t]),u.useEffect(()=>M.handoff(),[]),e?!1:t}let Ue=u.createContext(!1);function Xt(){return u.useContext(Ue)}function An(e){return E.createElement(Ue.Provider,{value:e.force},e.children)}function Kt(e){let t=Xt(),n=u.useContext(We),r=De(e),[l,i]=u.useState(()=>{var a;if(!t&&n!==null)return(a=n.current)!=null?a:null;if(M.isServer)return null;let s=r==null?void 0:r.getElementById("headlessui-portal-root");if(s)return s;if(r===null)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),l}let _e=u.Fragment,zt=T(function(e,t){let n=e,r=u.useRef(null),l=H(dt(p=>{r.current=p}),t),i=De(r),a=Kt(r),[s]=u.useState(()=>{var p;return M.isServer?null:(p=i==null?void 0:i.createElement("div"))!=null?p:null}),o=u.useContext(se),d=pe();w(()=>{!a||!s||a.contains(s)||(s.setAttribute("data-headlessui-portal",""),a.appendChild(s))},[a,s]),w(()=>{if(s&&o)return o.register(s)},[o,s]),Gt(()=>{var p;!a||!s||(s instanceof Node&&a.contains(s)&&a.removeChild(s),a.childNodes.length<=0&&((p=a.parentElement)==null||p.removeChild(a)))});let c=j();return d?!a||!s?null:Qe.createPortal(c({ourProps:{ref:l},theirProps:n,slot:{},defaultTag:_e,name:"Portal"}),s):null});function Jt(e,t){let n=H(t),{enabled:r=!0,...l}=e,i=j();return r?E.createElement(zt,{...l,ref:n}):i({ourProps:{ref:n},theirProps:l,slot:{},defaultTag:_e,name:"Portal"})}let Qt=u.Fragment,We=u.createContext(null);function Zt(e,t){let{target:n,...r}=e,l={ref:H(t)},i=j();return E.createElement(We.Provider,{value:n},i({ourProps:l,theirProps:r,defaultTag:Qt,name:"Popover.Group"}))}let se=u.createContext(null);function On(){let e=u.useContext(se),t=u.useRef([]),n=$(i=>(t.current.push(i),e&&e.register(i),()=>r(i))),r=$(i=>{let a=t.current.indexOf(i);a!==-1&&t.current.splice(a,1),e&&e.unregister(i)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:i}){return E.createElement(se.Provider,{value:l},i)},[l])]}let en=T(Jt),tn=T(Zt),Tn=Object.assign(en,{Group:tn});function nn(){let e=u.useRef(!1);return w(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ve(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:Be)!==u.Fragment||E.Children.count(e.children)===1}let J=u.createContext(null);J.displayName="TransitionContext";var rn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(rn||{});function ln(){let e=u.useContext(J);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function on(){let e=u.useContext(Q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let Q=u.createContext(null);Q.displayName="NestingContext";function Z(e){return"children"in e?Z(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function qe(e,t){let n=k(e),r=u.useRef([]),l=nn(),i=Oe(),a=$((f,h=A.Hidden)=>{let g=r.current.findIndex(({el:v})=>v===f);g!==-1&&(V(h,{[A.Unmount](){r.current.splice(g,1)},[A.Hidden](){r.current[g].state="hidden"}}),i.microTask(()=>{var v;!Z(r)&&l.current&&((v=n.current)==null||v.call(n))}))}),s=$(f=>{let h=r.current.find(({el:g})=>g===f);return h?h.state!=="visible"&&(h.state="visible"):r.current.push({el:f,state:"visible"}),()=>a(f,A.Unmount)}),o=u.useRef([]),d=u.useRef(Promise.resolve()),c=u.useRef({enter:[],leave:[]}),p=$((f,h,g)=>{o.current.splice(0),t&&(t.chains.current[h]=t.chains.current[h].filter(([v])=>v!==f)),t==null||t.chains.current[h].push([f,new Promise(v=>{o.current.push(v)})]),t==null||t.chains.current[h].push([f,new Promise(v=>{Promise.all(c.current[h].map(([S,D])=>D)).then(()=>v())})]),h==="enter"?d.current=d.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(h)):g(h)}),m=$((f,h,g)=>{Promise.all(c.current[h].splice(0).map(([v,S])=>S)).then(()=>{var v;(v=o.current.shift())==null||v()}).then(()=>g(h))});return u.useMemo(()=>({children:r,register:s,unregister:a,onStart:p,onStop:m,wait:d,chains:c}),[s,a,r,p,m,c,d])}let Be=u.Fragment,Ge=Te.RenderStrategy;function an(e,t){var n,r;let{transition:l=!0,beforeEnter:i,afterEnter:a,beforeLeave:s,afterLeave:o,enter:d,enterFrom:c,enterTo:p,entered:m,leave:f,leaveFrom:h,leaveTo:g,...v}=e,[S,D]=u.useState(null),b=u.useRef(null),P=Ve(e),F=H(...P?[b,t,D]:t===null?[]:[t]),me=(n=v.unmount)==null||n?A.Unmount:A.Hidden,{show:C,appear:he,initial:ve}=ln(),[x,ee]=u.useState(C?"visible":"hidden"),ge=on(),{register:q,unregister:B}=ge;w(()=>q(b),[q,b]),w(()=>{if(me===A.Hidden&&b.current){if(C&&x!=="visible"){ee("visible");return}return V(x,{hidden:()=>B(b),visible:()=>q(b)})}},[x,b,q,B,C,me]);let te=pe();w(()=>{if(P&&te&&x==="visible"&&b.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[b,x,te,P]);let Xe=ve&&!he,Ee=he&&C&&ve,ne=u.useRef(!1),G=qe(()=>{ne.current||(ee("hidden"),B(b))},ge),be=$(re=>{ne.current=!0;let Y=re?"enter":"leave";G.onStart(b,Y,U=>{U==="enter"?i==null||i():U==="leave"&&(s==null||s())})}),ye=$(re=>{let Y=re?"enter":"leave";ne.current=!1,G.onStop(b,Y,U=>{U==="enter"?a==null||a():U==="leave"&&(o==null||o())}),Y==="leave"&&!Z(G)&&(ee("hidden"),B(b))});u.useEffect(()=>{P&&l||(be(C),ye(C))},[C,P,l]);let Ke=!(!l||!P||!te||Xe),[,y]=_t(Ke,S,C,{start:be,end:ye}),ze=N({ref:F,className:((r=ie(v.className,Ee&&d,Ee&&c,y.enter&&d,y.enter&&y.closed&&c,y.enter&&!y.closed&&p,y.leave&&f,y.leave&&!y.closed&&h,y.leave&&y.closed&&g,!y.transition&&C&&m))==null?void 0:r.trim())||void 0,...Ut(y)}),I=0;x==="visible"&&(I|=L.Open),x==="hidden"&&(I|=L.Closed),y.enter&&(I|=L.Opening),y.leave&&(I|=L.Closing);let Je=j();return E.createElement(Q.Provider,{value:G},E.createElement(Bt,{value:I},Je({ourProps:ze,theirProps:v,defaultTag:Be,features:Ge,visible:x==="visible",name:"Transition.Child"})))}function un(e,t){let{show:n,appear:r=!1,unmount:l=!0,...i}=e,a=u.useRef(null),s=Ve(e),o=H(...s?[a,t]:t===null?[]:[t]);pe();let d=Ie();if(n===void 0&&d!==null&&(n=(d&L.Open)===L.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,p]=u.useState(n?"visible":"hidden"),m=qe(()=>{n||p("hidden")}),[f,h]=u.useState(!0),g=u.useRef([n]);w(()=>{f!==!1&&g.current[g.current.length-1]!==n&&(g.current.push(n),h(!1))},[g,n]);let v=u.useMemo(()=>({show:n,appear:r,initial:f}),[n,r,f]);w(()=>{n?p("visible"):!Z(m)&&a.current!==null&&p("hidden")},[n,m]);let S={unmount:l},D=$(()=>{var F;f&&h(!1),(F=e.beforeEnter)==null||F.call(e)}),b=$(()=>{var F;f&&h(!1),(F=e.beforeLeave)==null||F.call(e)}),P=j();return E.createElement(Q.Provider,{value:m},E.createElement(J.Provider,{value:v},P({ourProps:{...S,as:u.Fragment,children:E.createElement(Ye,{ref:o,...S,...i,beforeEnter:D,beforeLeave:b})},theirProps:{},defaultTag:u.Fragment,features:Ge,visible:c==="visible",name:"Transition"})))}function sn(e,t){let n=u.useContext(J)!==null,r=Ie()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(ce,{ref:t,...e}):E.createElement(Ye,{ref:t,...e}))}let ce=T(un),Ye=T(an),cn=T(sn),Fn=Object.assign(ce,{Child:cn,Root:ce});export{An as A,Tn as B,Fn as C,cn as D,N as E,bt as F,rt as G,En as H,$n as I,Bt as J,T as K,j as L,_t as M,Ut as N,Te as O,Ot as P,O as Q,Cn as R,St as S,yt as T,vn as U,ke as V,Sn as W,tn as X,At as Y,mn as _,ht as a,De as b,hn as c,st as d,Nt as e,ue as f,V as g,Gt as h,nn as i,Ie as j,L as k,pe as l,On as m,w as n,$ as o,Oe as p,yn as q,Pn as r,k as s,Ae as t,de as u,wn as v,gn as w,fe as x,H as y,xn as z};