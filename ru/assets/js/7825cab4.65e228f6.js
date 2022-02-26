"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6601],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(9496);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(t),h=s,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return t?a.createElement(d,r(r({ref:n},l),{},{components:t})):a.createElement(d,r({ref:n},l))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5852:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,assets:()=>l,toc:()=>u,default:()=>h});var a=t(7813),s=t(7044),i=(t(9496),t(9613)),r=["components"],o={id:"using-changesets",title:"Using Changesets with pnpm"},p=void 0,c={unversionedId:"using-changesets",id:"version-5.x/using-changesets",title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ru/5.x/using-changesets",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",frontMatter:{id:"using-changesets",title:"Using Changesets with pnpm"},sidebar:"version-5.x/docs",previous:{title:"\u0410\u0432\u0442\u043e\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434",permalink:"/ru/5.x/completion"},next:{title:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f (CI/CD)",permalink:"/ru/5.x/continuous-integration"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"Adding new changesets",id:"adding-new-changesets",level:2},{value:"Releasing changes",id:"releasing-changes",level:2},{value:"Using GitHub Actions",id:"using-github-actions",level:2}],m={toc:u};function h(e){var n=e.components,t=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,i.kt)("p",null,"Then changesets' init command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,i.kt)("h2",{id:"adding-new-changesets"},"Adding new changesets"),(0,i.kt)("p",null,"To generate a new changeset, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. The generated markdown files in the ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),(0,i.kt)("h2",{id:"releasing-changes"},"Releasing changes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),(0,i.kt)("li",{parentName:"ol"},"Commit the changes."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),(0,i.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,i.kt)("p",null,"To automate the process, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,i.kt)("p",null,"In a nutshell, the action will detect new changesets on the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch, apply them, commit the updated metadata and changelogs, and open a Pull Request. You could also publish your packages automatically."),(0,i.kt)("p",null,"More info and documentation regarding this action can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}h.isMDXComponent=!0}}]);