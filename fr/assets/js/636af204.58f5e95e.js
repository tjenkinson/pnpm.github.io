"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8545],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6090:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>m});var n=r(9518),o=r(7344),a=(r(9496),r(9613)),c=["components"],i={id:"create",title:"Cr\xe9ation pnpm"},p=void 0,l={unversionedId:"cli/create",id:"cli/create",title:"Cr\xe9ation pnpm",description:"Ajout\xe9 dans la version v6.17.0",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/create.md",sourceDirName:"cli",slug:"/cli/create",permalink:"/fr/next/cli/create",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"create",title:"Cr\xe9ation pnpm"},sidebar:"docs",previous:{title:"pnpm dlx",permalink:"/fr/next/cli/dlx"},next:{title:"pnpm start",permalink:"/fr/next/cli/start"}},u=[{value:"Exemples",id:"exemples",children:[],level:2}],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ajout\xe9 dans la version v6.17.0"),(0,a.kt)("p",null,"Cr\xe9er un projet \xe0 partir d'un kit de d\xe9marrage ",(0,a.kt)("inlineCode",{parentName:"p"},"create-*"),"."),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm create react-app my-app\n")))}m.isMDXComponent=!0}}]);