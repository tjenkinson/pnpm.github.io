"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5470],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4436:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,assets:()=>s,toc:()=>u,default:()=>f});var r=n(7813),o=n(7044),a=(n(9496),n(9613)),p=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",title:"pnpx CLI",description:"For new users",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/ko/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/ko/5.x/pnpm-cli"},next:{title:"Configuring",permalink:"/ko/5.x/configuring"}},s={},u=[{value:"For new users",id:"for-new-users",level:2},{value:"For npm users",id:"for-npm-users",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"for-new-users"},"For new users"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,a.kt)("p",null,"For example, to use ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"This will fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,a.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,a.kt)("p",null,"npm has a great package runner called ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}f.isMDXComponent=!0}}]);