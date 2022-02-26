"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8827],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2032:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,assets:()=>s,toc:()=>d,default:()=>m});var r=n(7813),l=n(7044),o=(n(9496),n(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/id/cli/exec",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/id/cli/test"},next:{title:"pnpm dlx",permalink:"/id/cli/dlx"}},s={},d=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Execute a shell command in scope of a project."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Any options for the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," keyword. Options listed after the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,o.kt)("p",null,"Good. pnpm will run recursively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,o.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Added in: v2.9.0"),(0,o.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,o.kt)("p",null,"The name of the current package is available through the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,"Prune ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,o.kt)("p",null,"View package information for all packages. This should be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Added in: v5.1.0"),(0,o.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,o.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,o.kt)("p",null,"Added in: v6.31.0"),(0,o.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);