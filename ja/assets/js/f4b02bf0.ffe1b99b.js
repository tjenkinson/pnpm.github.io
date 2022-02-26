"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6269],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8194:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,assets:()=>s,toc:()=>u,default:()=>f});var r=n(7813),o=n(7044),i=(n(9496),n(9613)),a=["components"],p={id:"setup",title:"pnpm setup"},c=void 0,l={unversionedId:"cli/setup",id:"cli/setup",title:"pnpm setup",description:"This command is used by the standalone installation scripts of pnpm. For instance, in .",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/setup.md",sourceDirName:"cli",slug:"/cli/setup",permalink:"/ja/next/cli/setup",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"setup",title:"pnpm setup"},sidebar:"docs",previous:{title:"pnpm bin",permalink:"/ja/next/cli/bin"},next:{title:"package.json",permalink:"/ja/next/package_json"}},s={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command is used by the standalone installation scripts of pnpm. For instance, in ",(0,i.kt)("a",{parentName:"p",href:"https://get.pnpm.io/install.sh"},"https://get.pnpm.io/install.sh"),"."),(0,i.kt)("p",null,"Setup does the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creates a home directory for the pnpm CLI"),(0,i.kt)("li",{parentName:"ul"},"adds the pnpm home directory to the ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by updating the shell configuration file"),(0,i.kt)("li",{parentName:"ul"},"copies the pnpm executable to the pnpm home directory")))}f.isMDXComponent=!0}}]);