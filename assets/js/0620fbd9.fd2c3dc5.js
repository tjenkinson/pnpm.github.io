"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[417],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8168:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>m,assets:()=>d,toc:()=>c,default:()=>u});var r=n(7813),a=n(7044),i=(n(9496),n(9613)),o=["components"],p={id:"pnpm-cli",title:"pnpm CLI"},l=void 0,m={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",title:"pnpm CLI",description:"Differences vs npm",source:"@site/versioned_docs/version-5.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/5.x/pnpm-cli",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/pnpm-cli.md",tags:[],version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1641205290,formattedLastUpdatedAt:"1/3/2022",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-5.x/docs",previous:{title:"Installation",permalink:"/5.x/installation"},next:{title:"pnpx CLI",permalink:"/5.x/pnpx-cli"}},d={},c=[{value:"Differences vs npm",id:"differences-vs-npm",level:2},{value:"Options",id:"options",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Commands",id:"commands",level:2}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"differences-vs-npm"},"Differences vs npm"),(0,i.kt)("p",null,"Unlike npm, pnpm validates all options. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," will\nfail as ",(0,i.kt)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"However, some dependencies may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which\nis populated from the CLI options. In this case, you have the following options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,i.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo=true"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,i.kt)("p",null,"Run as if pnpm was started in ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Added in: v5.6.0"),(0,i.kt)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current\nworking directory."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"For more information, see the documentation for individual CLI commands. Here is\na list of handy npm equivalents to get you started:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"npm command"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/5.x/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/5.x/cli/add"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm add <pkg>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/5.x/cli/exec"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm <cmd>")))))))}u.isMDXComponent=!0}}]);