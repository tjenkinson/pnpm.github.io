"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1131],{9613:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>d});var n=t(9496);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,n,l=function(e,i){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),s=function(e){var i=n.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},c=function(e){var i=s(e.components);return n.createElement(p.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?n.createElement(v,o(o({ref:i},c),{},{components:t})):n.createElement(v,o({ref:i},c))}));function d(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var a={};for(var p in i)hasOwnProperty.call(i,p)&&(a[p]=i[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7300:(e,i,t)=>{t.r(i),t.d(i,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>s,assets:()=>c,toc:()=>m,default:()=>d});var n=t(7813),l=t(7044),r=(t(9496),t(9613)),o=["components"],a={id:"uninstall",title:"Disinstallazione di pnpm"},p=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"Disinstallazione di pnpm",description:"Rimozione dei pacchetti installati a livello globale",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/it/uninstall",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"Disinstallazione di pnpm"},sidebar:"version-6.x/docs",previous:{title:"Come vengono risolti i peer",permalink:"/it/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/it/pnpm-vs-npm"}},c={},m=[{value:"Rimozione dei pacchetti installati a livello globale",id:"rimozione-dei-pacchetti-installati-a-livello-globale",level:2},{value:"Rimozione della CLI di pnpm",id:"rimozione-della-cli-di-pnpm",level:2},{value:"Rimozione dell&#39;archivio globale indirizzabile ai contenuti",id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti",level:2},{value:"Rimozione del file di stato",id:"rimozione-del-file-di-stato",level:2}],u={toc:m};function d(e){var i=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rimozione-dei-pacchetti-installati-a-livello-globale"},"Rimozione dei pacchetti installati a livello globale"),(0,r.kt)("p",null,"Prima di rimuovere la CLI di pnpm, potrebbe avere senso rimuovere tutti i pacchetti globali installati da pnpm."),(0,r.kt)("p",null,"Per elencare tutti i pacchetti globali, esegui ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Esistono due modi per rimuovere i pacchetti globali:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Esegui ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con ogni pacchetto globale elencato."),(0,r.kt)("li",{parentName:"ol"},"Esegui ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," per trovare la posizione della cartella globale e rimuoverla manualmente.")),(0,r.kt)("h2",{id:"rimozione-della-cli-di-pnpm"},"Rimozione della CLI di pnpm"),(0,r.kt)("p",null,"Se hai utilizzato lo script autonomo per installare pnpm (o npx), dovresti essere in grado di disinstallare la CLI pnpm utilizzando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,r.kt)("p",null,"Se hai usato npm per installare pnpm, allora dovresti usare npm per disinstallare pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,r.kt)("h2",{id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti"},"Rimozione dell'archivio globale indirizzabile ai contenuti"),(0,r.kt)("p",null,"Se hai usato pnpm solo nel disco primario, avrai un archivio globale nella cartella home. Quindi basta rimuoverlo tramite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,r.kt)("p",null,"Se hai usato pnpm in dischi non primari, l'archivio si trova nella radice di quel disco. Ad esempio, se hai utilizzato pnpm sul disco ",(0,r.kt)("inlineCode",{parentName:"p"},"D:")," su Windows, rimuovi l'archivio da ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("h2",{id:"rimozione-del-file-di-stato"},"Rimozione del file di stato"),(0,r.kt)("p",null,"pnpm salva anche alcuni stati in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Puoi rimuovere questo file."))}d.isMDXComponent=!0}}]);