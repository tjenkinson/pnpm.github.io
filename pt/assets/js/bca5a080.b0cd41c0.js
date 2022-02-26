"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2579],{9613:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return t?n.createElement(k,l(l({ref:a},s),{},{components:t})):n.createElement(k,l({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9282:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>d,assets:()=>s,toc:()=>m,default:()=>u});var n=t(7813),r=t(7044),o=(t(9496),t(9613)),l=["components"],p={id:"add",title:"pnpm add <pkg>"},i=void 0,d={unversionedId:"cli/add",id:"cli/add",title:"pnpm add <pkg>",description:"Instala um pacote e todos os outros pacotes dos quais ele depende. Por padr\xe3o, qualquer novo pacote \xe9 instalado como uma depend\xeancia de produ\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/pt/next/cli/add",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"docs",previous:{title:"Scripts",permalink:"/pt/next/scripts"},next:{title:"pnpm install",permalink:"/pt/next/cli/install"}},s={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"Locais de pacotes suportados",id:"locais-de-pacotes-suportados",level:2},{value:"Instala do registro do npm",id:"instala-do-registro-do-npm",level:3},{value:"Instalar a partir do workspace",id:"instalar-a-partir-do-workspace",level:3},{value:"Instalar de um sistema de arquivos local",id:"instalar-de-um-sistema-de-arquivos-local",level:3},{value:"Instalar a partir de um arquivo tarball remoto",id:"instalar-a-partir-de-um-arquivo-tarball-remoto",level:3},{value:"Instalar de um reposit\xf3rio Git",id:"instalar-de-um-reposit\xf3rio-git",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],c={toc:m};function u(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instala um pacote e todos os outros pacotes dos quais ele depende. Por padr\xe3o, qualquer novo pacote \xe9 instalado como uma depend\xeancia de produ\xe7\xe3o."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Comando"),(0,o.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,o.kt)("td",{parentName:"tr",align:null},"Salva em ",(0,o.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,o.kt)("td",{parentName:"tr",align:null},"Sava em ",(0,o.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,o.kt)("td",{parentName:"tr",align:null},"Salva em ",(0,o.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,o.kt)("td",{parentName:"tr",align:null},"Install package globally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,o.kt)("td",{parentName:"tr",align:null},"Instala a partir da tag ",(0,o.kt)("inlineCode",{parentName:"td"},"next"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Especifica a vers\xe3o ",(0,o.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,o.kt)("h2",{id:"locais-de-pacotes-suportados"},"Locais de pacotes suportados"),(0,o.kt)("h3",{id:"instala-do-registro-do-npm"},"Instala do registro do npm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," vai instalar a \xfaltima vers\xe3o do ",(0,o.kt)("inlineCode",{parentName:"p"},"package-name")," usando o ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"registro do npm")," por padr\xe3o."),(0,o.kt)("p",null,"Se for executado de um workspace, o comando verificar\xe1 se algum outro projeto do workspace utiliza o pacote especificado. Se sim, uma vers\xe3o j\xe1 usada ser\xe1 instalada."),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode instalar pacotes por:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tag: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,o.kt)("li",{parentName:"ul"},"vers\xe3o: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,o.kt)("li",{parentName:"ul"},"intervalo de vers\xe3o: ",(0,o.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,o.kt)("h3",{id:"instalar-a-partir-do-workspace"},"Instalar a partir do workspace"),(0,o.kt)("p",null,"Observe que ao adicionar depend\xeancias e usar um ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/workspaces"},"workspace"),", pacotes v\xe3o ser instalados a partir das fontes configuradas no workspace, dependendo se ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/workspaces#link-workspace-packages"},(0,o.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," esta ou n\xe3o definido e do uso do ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/workspaces#workspace-ranges-workspace"},(0,o.kt)("inlineCode",{parentName:"a"},"protocolo de espa\xe7o do workspace")),"."),(0,o.kt)("h3",{id:"instalar-de-um-sistema-de-arquivos-local"},"Instalar de um sistema de arquivos local"),(0,o.kt)("p",null,"Existem duas maneiras de instalar pelo sistema de arquivos local:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"usando um arquivo tarball (",(0,o.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,o.kt)("li",{parentName:"ol"},"de um diret\xf3rio")),(0,o.kt)("p",null,"Exemplos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,o.kt)("p",null,"Quando voc\xea instala a partir de um diret\xf3rio, um link simb\xf3lico ser\xe1 criado no ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," do projeto atual. Ent\xe3o \xe9 o mesmo que executar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,o.kt)("h3",{id:"instalar-a-partir-de-um-arquivo-tarball-remoto"},"Instalar a partir de um arquivo tarball remoto"),(0,o.kt)("p",null,'O argumento deve come\xe7ar com um URL busc\xe1vel come\xe7ando com "http://" ou "https://".'),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,o.kt)("h3",{id:"instalar-de-um-reposit\xf3rio-git"},"Instalar de um reposit\xf3rio Git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,o.kt)("p",null,"Instalar o pacote hospedado em um provedor git, clonando-o com Git. Voc\xea pode usar um protocolo para certos provedores Git. Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,o.kt)("p",null,"Voc\xea pode instalar a partir do Git por:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ultimo commit na master: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,o.kt)("li",{parentName:"ul"},"commit: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,o.kt)("li",{parentName:"ul"},"branch: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,o.kt)("li",{parentName:"ul"},"intervalo de vers\xe3o: ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"Instale os pacotes especificados em ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," como uma depend\xeancia comum."),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"Instale os pacotes especificados em ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," como uma depend\xeancia de desenvolvimento."),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"Instala os pacotes especificados em ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," como depend\xeancias opcionais."),(0,o.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,o.kt)("p",null,"Depend\xeancias instaladas ser\xe3o configuradas para usar uma vers\xe3o exata em vez de usar o intervalo de vers\xf5es padr\xe3o do pnpm."),(0,o.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,o.kt)("p",null,"Adicionando em: v3.2.0"),(0,o.kt)("p",null,"Usar ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-peer")," vai adicionar um ou mais pacotes em ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," e instala-los como depend\xeancias de desenvolvimento."),(0,o.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,o.kt)("p",null,"Adicionado em: v3.6.0"),(0,o.kt)("p",null,"Adicionar uma nova depend\xeancia ao diret\xf3rio raiz do workspace ira falhar, ao menos que ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"-W")," seja usado."),(0,o.kt)("p",null,"Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Instala um pacote globalmente."),(0,o.kt)("h3",{id:"--workspace"},"--workspace"),(0,o.kt)("p",null,"Adicionado em: v4.4.0"),(0,o.kt)("p",null,"Adiciona a nova depend\xeancia apenas se ela for encontrada no workspace."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}u.isMDXComponent=!0}}]);