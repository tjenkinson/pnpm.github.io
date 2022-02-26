"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2085],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1919:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>l,assets:()=>u,toc:()=>s,default:()=>f});var n=r(7813),a=r(7044),c=(r(9496),r(9613)),i=["components"],p={id:"pack",title:"pnpm pack"},o=void 0,l={unversionedId:"cli/pack",id:"cli/pack",title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/pl/next/cli/pack",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"docs",previous:{title:"pnpm publish",permalink:"/pl/next/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/pl/next/cli/recursive"}},u={},s=[{value:"Opcje",id:"opcje",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3}],d={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Create a tarball from a package."),(0,c.kt)("h2",{id:"opcje"},"Opcje"),(0,c.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,c.kt)("p",null,"Directory in which ",(0,c.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}f.isMDXComponent=!0}}]);