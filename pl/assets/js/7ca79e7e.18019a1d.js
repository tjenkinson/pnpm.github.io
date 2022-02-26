"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2989],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8457:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,assets:()=>c,toc:()=>u,default:()=>d});var a=t(7813),i=t(7044),o=(t(9496),t(9613)),r=["components"],s={id:"using-changesets",title:"U\u017cywanie Changesets z pnpm"},p=void 0,l={unversionedId:"using-changesets",id:"version-5.x/using-changesets",title:"U\u017cywanie Changesets z pnpm",description:"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/version-5.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/pl/5.x/using-changesets",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"5.x",frontMatter:{id:"using-changesets",title:"U\u017cywanie Changesets z pnpm"},sidebar:"version-5.x/docs",previous:{title:"Command line tab-completion",permalink:"/pl/5.x/completion"},next:{title:"Continuous Integration",permalink:"/pl/5.x/continuous-integration"}},c={},u=[{value:"Konfiguracja",id:"konfiguracja",level:2},{value:"Dodawanie nowych zestaw\xf3w zmian",id:"dodawanie-nowych-zestaw\xf3w-zmian",level:2},{value:"Publikowanie zmian",id:"publikowanie-zmian",level:2},{value:"Korzystanie z GitHub Actions",id:"korzystanie-z-github-actions",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1."))),(0,o.kt)("h2",{id:"konfiguracja"},"Konfiguracja"),(0,o.kt)("p",null,"Aby skonfigurowa\u0107 pakiet Changesets wraz z pnpm, nale\u017cy go zainstalowa\u0107 jako pakiet deweloperski w g\u0142\xf3wnym pliku konfiguracyjnym obszaru roboczego:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,o.kt)("p",null,"Nast\u0119pnie u\u017cy\u0107 polecania ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," pakietu Changesets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,o.kt)("h2",{id:"dodawanie-nowych-zestaw\xf3w-zmian"},"Dodawanie nowych zestaw\xf3w zmian"),(0,o.kt)("p",null,"To generate a new changeset, run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. Pliki wygenerowane w folderze ",(0,o.kt)("inlineCode",{parentName:"p"},".changeset"),", powinny zosta\u0107 zacomittowane w repozytorium."),(0,o.kt)("h2",{id:"publikowanie-zmian"},"Publikowanie zmian"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),(0,o.kt)("li",{parentName:"ol"},"Commit the changes."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),(0,o.kt)("h2",{id:"korzystanie-z-github-actions"},"Korzystanie z GitHub Actions"),(0,o.kt)("p",null,"To automate the process, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,o.kt)("p",null,"In a nutshell, the action will detect new changesets on the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, apply them, commit the updated metadata and changelogs, and open a Pull Request. You could also publish your packages automatically."),(0,o.kt)("p",null,"More info and documentation regarding this action can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}d.isMDXComponent=!0}}]);