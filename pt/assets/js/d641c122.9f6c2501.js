"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[419],{3482:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(2182),r=n(9028),l=(n(5170),n(3482)),o=["components"],i={id:"filtering",title:"Filtragem"},p=void 0,c={unversionedId:"filtering",id:"filtering",title:"Filtragem",description:"A filtragem permite restringir comandos a subconjuntos espec\xedficos de pacotes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/pt/next/filtering",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"filtering",title:"Filtragem"},sidebar:"docs",previous:{title:"Configurando",permalink:"/pt/next/configuring"},next:{title:"Scripts",permalink:"/pt/next/scripts"}},s={},d=[{value:"Matching",id:"matching",level:2},{value:"--filter &lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote",level:3},{value:"--filter &lt;nome_do_pacote&gt;...",id:"--filter-nome_do_pacote-1",level:3},{value:"--filter &lt;nome_do_pacote&gt;^...",id:"--filter-nome_do_pacote-2",level:3},{value:"--filter ...&lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote-3",level:3},{value:"--filter &quot;...^&lt;nome_do_pacote&gt;&quot;",id:"--filter-nome_do_pacote-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A filtragem permite restringir comandos a subconjuntos espec\xedficos de pacotes."),(0,l.kt)("p",null,"O pnpm suporta uma sintaxe de seletor rica para selecionar pacotes por nome ou por rela\xe7\xe3o."),(0,l.kt)("p",null,"Selectors may be specified via the ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,l.kt)("h2",{id:"matching"},"Matching"),(0,l.kt)("h3",{id:"--filter-nome_do_pacote"},"--filter ","<","nome_do_pacote>"),(0,l.kt)("p",null,"Para selecionar um pacote exato apenas especifique o nome (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") ou use um padr\xe3o para selecionar um conjunto de pacotes (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,l.kt)("p",null,"Especificar o escopo do pacote \xe9 opcional, portanto ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter=core")," escolher\xe1 ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," se ",(0,l.kt)("inlineCode",{parentName:"p"},"core")," n\xe3o for encontrado. No entanto, se o espa\xe7o de trabalho tem v\xe1rios pacotes com o mesmo nome (por exemplo, ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," e ",(0,l.kt)("inlineCode",{parentName:"p"},"@types/core"),"), ent\xe3o a filtragem sem escopo n\xe3o escolher\xe1 nada."),(0,l.kt)("h3",{id:"--filter-nome_do_pacote-1"},"--filter ","<","nome_do_pacote>..."),(0,l.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,l.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,l.kt)("h3",{id:"--filter-nome_do_pacote-2"},"--filter ","<","nome_do_pacote>^..."),(0,l.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,l.kt)("h3",{id:"--filter-nome_do_pacote-3"},"--filter ...","<","nome_do_pacote>"),(0,l.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,l.kt)("h3",{id:"--filter-nome_do_pacote-4"},'--filter "...^',"<",'nome_do_pacote>"'),(0,l.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,l.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,l.kt)("p",null,"A glob pattern relative to the current working directory matching projects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,l.kt)("p",null,"Includes all projects that are under the specified directory."),(0,l.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,l.kt)("p",null,"It may also be combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,l.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,l.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,l.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,l.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,l.kt)("h2",{id:"excluding"},"Excluding"),(0,l.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,l.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,l.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,l.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,l.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,l.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,l.kt)("p",null,"Acts the same a ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,l.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,l.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,l.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,l.kt)("p",null,"Usage example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}u.isMDXComponent=!0}}]);