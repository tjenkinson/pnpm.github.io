"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6202],{9613:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>u});var t=n(9496);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),k=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},o=function(e){var a=k(e.components);return t.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=k(n),u=i,g=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return n?t.createElement(g,l(l({ref:a},o),{},{components:n})):t.createElement(g,l({ref:a},o))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var k=2;k<r;k++)l[k]=n[k];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4299:(e,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>k,assets:()=>o,toc:()=>s,default:()=>u});var t=n(7813),i=n(7044),r=(n(9496),n(9613)),l=["components"],p={id:"add",title:"pnpm add <pkg>"},d=void 0,k={unversionedId:"cli/add",id:"cli/add",title:"pnpm add <pkg>",description:"Memasang sebuah paket dan paket apa pun yang bergantung padanya. Secara asali, paket baru apa pun diinstal sebagai dependensi produksi.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/id/next/cli/add",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"docs",previous:{title:"Scripts",permalink:"/id/next/scripts"},next:{title:"pnpm install",permalink:"/id/next/cli/install"}},o={},s=[{value:"SINGKATNYA",id:"singkatnya",level:2},{value:"Lokasi paket yang didukung",id:"lokasi-paket-yang-didukung",level:2},{value:"Pasang dari registri npm",id:"pasang-dari-registri-npm",level:3},{value:"Menginstal dari ruang kerja",id:"menginstal-dari-ruang-kerja",level:3},{value:"Instal dari file lokal sistem",id:"instal-dari-file-lokal-sistem",level:3},{value:"Instal dari remote tarball",id:"instal-dari-remote-tarball",level:3},{value:"Instal dari repositori Git",id:"instal-dari-repositori-git",level:3},{value:"Opsi",id:"opsi",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:s};function u(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memasang sebuah paket dan paket apa pun yang bergantung padanya. Secara asali, paket baru apa pun diinstal sebagai dependensi produksi."),(0,r.kt)("h2",{id:"singkatnya"},"SINGKATNYA"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,r.kt)("th",{parentName:"tr",align:null},"Berarti"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Install package globally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Menginstal dari tanda versi ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Tentukan versi ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,r.kt)("h2",{id:"lokasi-paket-yang-didukung"},"Lokasi paket yang didukung"),(0,r.kt)("h3",{id:"pasang-dari-registri-npm"},"Pasang dari registri npm"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add nama-paket")," akan menginstal versi mutakhir dari ",(0,r.kt)("inlineCode",{parentName:"p"},"nama-paket")," dari ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," secara asali."),(0,r.kt)("p",null,"Jika dijalankan di workspace (ruang kerja), perintah pertama-tama akan mencoba memeriksa apakah proyek lain di workspace menggunakan paket yang ditentukan. Jika demikian, rentang versi yang sudah digunakan akan dipasang."),(0,r.kt)("p",null,"Anda juga dapat memasang paket dengan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tanda: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"versi: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"rentang versi: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">= 0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"menginstal-dari-ruang-kerja"},"Menginstal dari ruang kerja"),(0,r.kt)("p",null,"Perhatikan saat menambahkan dependensi dan bekerja dengan ",(0,r.kt)("a",{parentName:"p",href:"/id/next/workspaces"},"tempat kerja"),", paket akan diinstal dari sumber yang telah di tentukan, bergantung kepada ",(0,r.kt)("a",{parentName:"p",href:"/id/next/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-tempat-kerja-paket"))," telah di set atau tidak, dan penggunaan pada ",(0,r.kt)("a",{parentName:"p",href:"/id/next/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"tempat kerja: jangkauan protokol")),"."),(0,r.kt)("h3",{id:"instal-dari-file-lokal-sistem"},"Instal dari file lokal sistem"),(0,r.kt)("p",null,"Ada dua cara untuk menginstal dari sistem file lokal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"dari berkas tarball (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", atau ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"dari direktori")),(0,r.kt)("p",null,"Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"Saat Anda menginstal dari direktori, symlink akan dibuat di ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"proyek saat ini, jadi ini sama dengan menjalankan ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"instal-dari-remote-tarball"},"Instal dari remote tarball"),(0,r.kt)("p",null,'Argumen harus berupa URL yang dapat diambil yang dimulai dengan "http://" atau "https://".'),(0,r.kt)("p",null,"Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"instal-dari-repositori-git"},"Instal dari repositori Git"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Menginstal paket dari penyedia Git yang dihosting, mengkloningnya dengan Git. Anda dapat menggunakan protokol untuk penyedia Git tertentu. Misalnya, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,r.kt)("p",null,"Anda dapat menginstal dari Git dengan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"komit terbaru dari master: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"komit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"branch: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positif#master")),(0,r.kt)("li",{parentName:"ul"},"rentang versi: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"opsi"},"Opsi"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Instal paket yang ditentukan sebagai reguler ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Instal paket yang ditentukan sebagai ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Instal paket yang ditentukan sebagai ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Dependensi yang disimpan akan dikonfigurasikan dengan versi yang tepat daripada menggunakan operator jarak semver standar pnpm."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Ditambahkan di: v3.2.0"),(0,r.kt)("p",null,"Menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," akan menambahkan satu atau lebih paket ke ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," dan menginstalnya sebagai dependensi dev."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"Ditambahkan di: v3.6.0"),(0,r.kt)("p",null,"Menambahkan ketergantungan baru ke paket root workspace gagal, kecuali jika ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," atau ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," digunakan."),(0,r.kt)("p",null,"Misalnya, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Instal paket secara global."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Ditambahkan di: v4.4.0"),(0,r.kt)("p",null,"Hanya tambahkan ketergantungan baru jika ditemukan di ruang kerja."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Baca lebih lanjut tentang penyaringan.")))}u.isMDXComponent=!0}}]);