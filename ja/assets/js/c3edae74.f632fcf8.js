"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5982],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),k=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=k(n),u=a,c=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return n?l.createElement(c,i(i({ref:t},m),{},{components:n})):l.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7082:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>k,assets:()=>m,toc:()=>s,default:()=>u});var l=n(7813),a=n(7044),r=(n(9496),n(9613)),i=["components"],p={id:"install",title:"pnpm install"},o=void 0,k={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: i",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/ja/cli/install",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/ja/cli/add"},next:{title:"pnpm update",permalink:"/ja/cli/update"}},m={},s=[{value:"TL;DR",id:"tldr",level:2},{value:"Options",id:"options",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s};function u(e){var t=e.components,p=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"CI \u74b0\u5883\u3067\u306f\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u3066\u3082\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")," \u5185\u3067\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 \u3053\u306e\u52d5\u4f5c\u3092\u7121\u52b9\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," \u3092  ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(1393).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u5473"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c8\u30a2\u304b\u3089\u306e\u307f\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u3092\u66f4\u65b0\u3057\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u306e\u307f\u66f4\u65b0\u3059\u308b")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u30b9\u30c8\u30a2\u3067\u3059\u3067\u306b\u5229\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30ed\u30fc\u30ab\u30eb\u3067\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.28.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u5931\u52b9\u30c1\u30a7\u30c3\u30af\u306f\u7701\u7565\u3055\u308c\u307e\u3059\u304c\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u306f\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u8981\u6c42\u3055\u308c\u307e\u3059\u3002 \u3059\u3079\u3066\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u3084\u308b\u3088\u3046\u306b\u5f37\u5236\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3001\u304a\u3088\u3073\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u3053\u306e\u30d5\u30e9\u30b0\u304c\u3042\u308b\u5834\u5408\u3067\u3082\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/ja/pnpmfile"},".pnpnpmfile.cjs")," \u306f\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u74b0\u5883\u5909\u6570\u304c production \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306b\u3042\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u305b\u3093\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001pnpm \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a\u3092\u7121\u8996\u3057\u3066 production \u74b0\u5883\u3068\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u306b\u3088\u3089\u305a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u5185\u306e\u4f9d\u5b58\u306e\u307f\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.26.0 (",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only")," \u3068\u3044\u3046\u540d\u524d\u3067\u6700\u521d\u306f\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u306e\u307f\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u66f8\u304d\u8fbc\u307e\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.15.0"),(0,r.kt)("p",null,"\u7834\u640d\u3057\u305f lockfile \u306e\u9805\u76ee\u3092\u81ea\u52d5\u7684\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.37.1 (",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap")," \u3068\u3044\u3046\u540d\u524d\u3067\u6700\u521d\u306f\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CI \u74b0\u5883\u4ee5\u5916: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI \u74b0\u5883: \u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f ",(0,r.kt)("strong",{parentName:"li"},"true")))),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001 pnpm \u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u305b\u3093\u3002 lockfile \u304c\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3068\u540c\u671f\u3057\u3066\u304a\u3089\u305a\u3001\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u5834\u5408\u3001\u307e\u305f\u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY \u6a19\u6e96\u51fa\u529b: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY \u6a19\u6e96\u51fa\u529b\u4ee5\u5916: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9032\u884c\u72b6\u6cc1\u306e\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u3092\u30bf\u30fc\u30df\u30ca\u30eb\u306b\u30ed\u30b0\u51fa\u529b\u3059\u308b\u30ec\u30dd\u30fc\u30bf\u30fc\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - \u81f4\u547d\u7684\u306a\u30a8\u30e9\u30fc\u4ee5\u5916\u3092\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u51fa\u529b\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - \u6a19\u6e96\u51fa\u529b\u304c TTY \u3067\u3042\u308b\u3068\u304d\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ec\u30dd\u30fc\u30bf\u30fc\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (v1.29.1 \u306b\u3066\u8ffd\u52a0) - \u51fa\u529b\u3092\u5e38\u306b\u6700\u5f8c\u306b\u52a0\u3048\u3066\u3044\u304f\u3002 \u30ab\u30fc\u30bd\u30eb\u64cd\u4f5c\u3092\u884c\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - \u6700\u3082\u8a73\u7d30\u306a\u30ec\u30dd\u30fc\u30bf\u30fc\u3002 ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3079\u3066\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.30.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u3082\u3001\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u306f\u5b9f\u884c\u3057\u7d9a\u3051\u307e\u3059\u3002 \u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," \u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u3067\u4f7f\u7528\u3055\u308c\u308b\u30d5\u30e9\u30c3\u30c8\u306a",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u69cb\u9020\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u8b66\u544a"),": \u3053\u308c\u306f\u975e\u5e38\u306b\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}u.isMDXComponent=!0},1393:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);