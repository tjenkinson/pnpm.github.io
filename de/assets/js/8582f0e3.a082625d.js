"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7874],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(s,i(i({ref:e},u),{},{components:n})):r.createElement(s,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8982:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,assets:()=>u,toc:()=>m,default:()=>k});var r=n(7813),a=n(7044),l=(n(9496),n(9613)),i=["components"],p={id:"feature-comparison",title:"Feature Comparison"},o=void 0,d={unversionedId:"feature-comparison",id:"feature-comparison",title:"Feature Comparison",description:"| Feature                     | pnpm                  | Yarn                 | npm                      |",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/feature-comparison.md",sourceDirName:".",slug:"/feature-comparison",permalink:"/de/next/feature-comparison",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"current",frontMatter:{id:"feature-comparison",title:"Feature Comparison"},sidebar:"docs",previous:{title:"Working with Git",permalink:"/de/next/git"},next:{title:"Error Codes",permalink:"/de/next/errors"}},u={},m=[],c={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Workspace support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Isolated ",(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hoisted ",(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plug'n'Play"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - The default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zero-Installs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Patching dependencies"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Managing Node.js versions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Has a lockfile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn.lock")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"package-lock.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overrides support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via resolutions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content-addressable storage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic package execution"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Via ",(0,l.kt)("inlineCode",{parentName:"td"},"npx"))))))}k.isMDXComponent=!0}}]);