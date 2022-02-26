"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4297],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return t?a.createElement(d,s(s({ref:n},c),{},{components:t})):a.createElement(d,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9302:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>l,assets:()=>c,toc:()=>u,default:()=>h});var a=t(7813),r=t(7044),i=(t(9496),t(9613)),s=["components"],o={id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},p=void 0,l={unversionedId:"using-changesets",id:"version-5.x/using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",description:"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ja/5.x/using-changesets",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},sidebar:"version-5.x/docs",previous:{title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c",permalink:"/ja/5.x/completion"},next:{title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/5.x/continuous-integration"}},c={},u=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",level:2},{value:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",level:2},{value:"Using GitHub Actions",id:"using-github-actions",level:2}],m={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1."))),(0,i.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,i.kt)("p",null,"changesets \u3092 pnpm \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u306b\u306f\u3001changesets \u3092 devDependency \u3068\u3057\u3066\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,i.kt)("p",null,"changesets \u306e\u521d\u671f\u5316\u30b3\u30de\u30f3\u30c9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,i.kt)("h2",{id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"},"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"),(0,i.kt)("p",null,"To generate a new changeset, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u751f\u6210\u3055\u308c\u305f\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30d5\u30a1\u30a4\u30eb\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"},"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3068\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 This command will publish all packages that have bumped versions not yet present in the registry.")),(0,i.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,i.kt)("p",null,"To automate the process, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,i.kt)("p",null,"In a nutshell, the action will detect new changesets on the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch, apply them, commit the updated metadata and changelogs, and open a Pull Request. You could also publish your packages automatically."),(0,i.kt)("p",null,"More info and documentation regarding this action can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}h.isMDXComponent=!0}}]);