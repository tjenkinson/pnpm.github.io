"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4825],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4229:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,assets:()=>u,toc:()=>s,default:()=>m});var n=r(7813),o=r(7044),a=(r(9496),r(9613)),i=["components"],c={id:"exec",title:"pnpm exec"},l=void 0,p={unversionedId:"cli/exec",id:"version-5.x/cli/exec",title:"pnpm exec",description:"Shorthand form of pnpm -r exec.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ja/5.x/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"exec",title:"pnpm exec"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--parallel",id:"--parallel",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shorthand form of ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r exec"),"."),(0,a.kt)("p",null,"See the ","[",(0,a.kt)("inlineCode",{parentName:"p"},"-r exec"),"]"," documentation for more information."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Disregards concurrency and topological sorting configuration entirely and runs the command immediately in all matching packages, with prefixed streaming output."),(0,a.kt)("p",null,"This is the preferred option for processes that take a long time to run. For example, running a build process with the watch flag over a large number of packages."))}m.isMDXComponent=!0}}]);