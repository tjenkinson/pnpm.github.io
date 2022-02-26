"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4086],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(f,p(p({ref:n},d),{},{components:t})):a.createElement(f,p({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4898:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,assets:()=>d,toc:()=>c,default:()=>m});var a=t(7813),r=t(7044),o=(t(9496),t(9613)),p=["components"],i={id:"package_json",title:"package.json"},s=void 0,l={unversionedId:"package_json",id:"version-5.x/package_json",title:"package.json",description:"Le fichier manifeste d'un package. Il contient toutes les m\xe9tadonn\xe9es du package, y compris les d\xe9pendances, le titre, l'auteur, etc. C'est un standard pr\xe9serv\xe9 dans tout les gestionnaires de packages de Node.JS, pnpm n'y fait pas exeption.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-5.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/fr/5.x/package_json",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"5.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-5.x/docs",previous:{title:"pnpm store",permalink:"/fr/5.x/cli/store"},next:{title:".npmrc",permalink:"/fr/5.x/npmrc"}},d={},c=[{value:"Champs",id:"champs",level:2},{value:"engines",id:"engines",level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:3},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:4},{value:"publishConfig",id:"publishconfig",level:3},{value:"pnpm.overrides",id:"pnpmoverrides",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le fichier manifeste d'un package. Il contient toutes les m\xe9tadonn\xe9es du package, y compris les d\xe9pendances, le titre, l'auteur, etc. C'est un standard pr\xe9serv\xe9 dans tout les gestionnaires de packages de Node.JS, pnpm n'y fait pas exeption."),(0,o.kt)("h2",{id:"champs"},"Champs"),(0,o.kt)("h3",{id:"engines"},"engines"),(0,o.kt)("p",null,"Vous pouvez sp\xe9cifier la version de Node et de pnpm sur laquelle votre logiciel fonctionne:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"En d\xe9veloppement local, pnmp lancera toujours avec un message d'erreur si sa version ne correspond pas \xe0 celle sp\xe9cifi\xe9e dans le champ ",(0,o.kt)("inlineCode",{parentName:"p"},"engines"),"."),(0,o.kt)("p",null,"\xc0 moins que l'utilisateur a d\xe9fini la configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," (voir ",(0,o.kt)("a",{parentName:"p",href:"/fr/5.x/npmrc#engine-strict"},".npmrc"),"), ce champ champ est uniquement \xe0 caract\xe8re consultatif et ne produira des avertissements que lorsque votre package est install\xe9 en tant que d\xe9pendance."),(0,o.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"This field lists some extra information related to the dependencies listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,o.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,o.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional by the package manager. Therefore, the consumer omitting it will no longer be reported as an error."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Note that even though ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is marked as optional. pnpm will therefore assume that any version of bar is fine. However, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,o.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"Added in: v3.4.0"),(0,o.kt)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,o.kt)("inlineCode",{parentName:"a"},"typings")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,o.kt)("p",null,"To override a field, add the publish version of the field to ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"For instance, the following ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Will be published as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,o.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,o.kt)("p",null,"Added in: v5.10.1"),(0,o.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,o.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,o.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,o.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,o.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,o.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,o.kt)("p",null,"Added in: v5.16.0"),(0,o.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);