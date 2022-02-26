"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9252],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=l,b=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(b,o(o({ref:n},d),{},{components:t})):a.createElement(b,o({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9084:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,assets:()=>d,toc:()=>m,default:()=>u});var a=t(7813),l=t(7044),r=(t(9496),t(9613)),o=["components"],i={id:"uninstall",title:"Desinstalando pnpm"},p=void 0,s={unversionedId:"uninstall",id:"uninstall",title:"Desinstalando pnpm",description:"Eliminando los paquetes instalados globalmente",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/es/next/uninstall",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",frontMatter:{id:"uninstall",title:"Desinstalando pnpm"},sidebar:"docs",previous:{title:"C\xf3mo se resuelven los peers",permalink:"/es/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/es/next/pnpm-vs-npm"}},d={},m=[{value:"Eliminando los paquetes instalados globalmente",id:"eliminando-los-paquetes-instalados-globalmente",level:2},{value:"Eliminando la CLI de pnpm",id:"eliminando-la-cli-de-pnpm",level:2},{value:"Eliminando el almac\xe9n direccionable de contenido global",id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global",level:2},{value:"Eliminando el archivo de estado",id:"eliminando-el-archivo-de-estado",level:2}],c={toc:m};function u(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"eliminando-los-paquetes-instalados-globalmente"},"Eliminando los paquetes instalados globalmente"),(0,r.kt)("p",null,"Antes de eliminar la CLI de pnpm, podr\xeda tener sentido eliminar todos los paquetes globales que instal\xf3 pnpm."),(0,r.kt)("p",null,"Para listar todos los paquetes globales, ejecute ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Hay dos formas de eliminar los paquetes globales:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ejecute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con cada paquete global listado."),(0,r.kt)("li",{parentName:"ol"},"Ejecute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar la ubicaci\xf3n del directorio global y elim\xednelo manualmente.")),(0,r.kt)("h2",{id:"eliminando-la-cli-de-pnpm"},"Eliminando la CLI de pnpm"),(0,r.kt)("p",null,"Si us\xf3 el script independiente para instalar pnpm (o npx), entonces deber\xeda poder desinstalar la CLI de pnpm usando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,r.kt)("p",null,"Si us\xf3 npm para instalar pnpm, entonces debe usar npm para desinstalar pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,r.kt)("h2",{id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global"},"Eliminando el almac\xe9n direccionable de contenido global"),(0,r.kt)("p",null,"Si us\xf3 pnpm solo en el disco principal, tendr\xe1 un almac\xe9n global en el directorio de inicio. As\xed que simplemente elim\xednelo a trav\xe9s de:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,r.kt)("p",null,"Si us\xf3 pnpm en discos no primarios, entonces el almac\xe9n est\xe1 en la ra\xedz de ese disco. Por ejemplo, si us\xf3 pnpm en el disco ",(0,r.kt)("inlineCode",{parentName:"p"},"D:")," en Windows, elimine el almac\xe9n en ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("h2",{id:"eliminando-el-archivo-de-estado"},"Eliminando el archivo de estado"),(0,r.kt)("p",null,"pnpm tambi\xe9n guarda alg\xfan estado en ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Puede eliminar este archivo."))}u.isMDXComponent=!0}}]);