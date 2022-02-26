"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1517],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},887:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,assets:()=>s,toc:()=>d,default:()=>m});var r=n(7813),l=n(7044),a=(n(9496),n(9613)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Shell parancs futtat\xe1sa egy projekt keret\xe9ben.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/hu/cli/exec",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/hu/cli/test"},next:{title:"pnpm dlx",permalink:"/hu/cli/dlx"}},s={},d=[{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2},{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shell parancs futtat\xe1sa egy projekt keret\xe9ben."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," hozz\xe1ad\xf3dik a ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"-hoz, \xedgy a ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," lehet\u0151v\xe9 teszi a f\xfcgg\u0151s\xe9gek parancsainak v\xe9grehajt\xe1s\xe1t."),(0,a.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,a.kt)("p",null,"Ha a Jest a projekt f\xfcgg\u0151s\xe9ge, akkor nincs sz\xfcks\xe9g a Jest glob\xe1lis telep\xedt\xe9s\xe9re, csak futtassa ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," parancs seg\xedts\xe9g\xe9vel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"Az ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," r\xe9sz val\xf3j\xe1ban opcion\xe1lis, ha a parancs nem egyezik meg egy be\xe9p\xedtett pnpm paranccsal, el\xe9g csak mag\xe1t a parancsot nevezni:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,a.kt)("p",null,"Any options for the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword. Options listed after the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,a.kt)("p",null,"Good. pnpm will run recursively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Added in: v2.9.0"),(0,a.kt)("p",null,"Futtassa a shell parancsot a workspace minden projektj\xe9ben."),(0,a.kt)("p",null,"The name of the current package is available through the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,a.kt)("h4",{id:"p\xe9ld\xe1k-1"},"P\xe9ld\xe1k"),(0,a.kt)("p",null,"Prune ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"View package information for all packages. This should be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Added in: v6.31.0"),(0,a.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hu/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);