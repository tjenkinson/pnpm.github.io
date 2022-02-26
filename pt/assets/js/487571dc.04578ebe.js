"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1909],{6936:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/pt/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/pt","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"The year 2021 for pnpm","description":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 de dezembro de 2021","tags":[],"readingTime":2.515,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"The year 2021 for pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"nextItem":{"title":"Node-Modules configuration options with pnpm","permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.\\n\\n\x3c!--truncate--\x3e\\n\\n## Usage\\n\\n### Download Stats\\n\\nMy goal this year was to beat Bower by the number of downloads. We were able to achieve this goal [in November](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm was downloaded about [3 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) in 2021 than in 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nThese stats don\'t even measure all the different ways that pnpm may be installed! They only measure the downloads of the [pnpm npm package](https://www.npmjs.com/package/pnpm). This year we also added compiled binary versions of pnpm, which are shipped differently.\\n\\n:::\\n\\n### Docs visits\\n\\nWe collect some unpersonalized stats from our docs using Google Analytics. In 2021, sometimes we had more than 2,000 unique visitors a week.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nMost of our users are from the United States and China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub stars\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received +5,000 stars this year.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### New users\\n\\nOur biggest new user this year is [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (the company behind TikTok).\\n\\nAlso, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* and [others](https://pnpm.io/workspaces#usage-examples)\\n\\nSome switched because they like how efficient, fast, and beautiful pnpm is:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## The Competition\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Others\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) written in Zig and [Volt](https://github.com/voltpkg/volt) written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet.\\n\\n## Future Plans\\n\\nFaster, better, best."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/pt","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Node-Modules configuration options with pnpm","description":"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 de outubro de 2020","tags":[],"readingTime":1.86,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Node-Modules configuration options with pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"The year 2021 for pnpm","permalink":"/pt/blog/2021/12/29/yearly-update"},"nextItem":{"title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","permalink":"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well.\\n\\n\x3c!--truncate--\x3e\\n\\n## The default setup\\n\\nBy default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to `package.json` (with a few exceptions). However, your dependencies will be able to access any packages.\\n\\nThe default configuration looks like this:\\n\\n```ini\\n; All packages are hoisted to node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; All types are hoisted to the root in order to make TypeScript happy\\npublic-hoist-pattern[]=*types*\\n\\n; All ESLint-related packages are hoisted to the root as well\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. The strictest configuration\\n\\npnpm supports [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting `hoist=false` because inside a monorepo, you\'re application will not be able to access even the dependencies of the root project.\\n\\nTo use Plug\'n\'Play, set these settings:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## A strict, traditional modules directory\\n\\nIf you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:\\n\\n```ini\\nhoist=false\\n```\\n\\nHowever, if some of your dependencies are trying to access packages that they don\'t have in dependencies, you have two options:\\n\\n1. Create a `pnpmfile.js` and use a [hook](/pnpmfile) to add the missing dependency to the package\'s manifest.\\n\\n2. Add a pattern to the `hoist-pattern` setting. For instance, if the not found module is `babel-core`, add the following setting to `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## The worst case - hoisting to the root\\n\\nSome tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory.\\n\\nHoisting everything to the the root of node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nHoisting only packages that match a pattern:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/pt","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","description":"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do node_modules que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 de maio de 2020","tags":[],"readingTime":2.73,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Node-Modules configuration options with pnpm","permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do `node_modules` que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?\\n\\n\x3c!--truncate--\x3e\\n\\n> Vou assumir que os leitores do artigo j\xe1 est\xe3o familiarizados com o `node_modules` plano criado pelo npm e Yarn. Se voc\xea n\xe3o entende por que o npm 3 teve que come\xe7ar a usar `node_modules` planos na v3, voc\xea pode encontrar um pouco da hist\xf3ria em [Por que devemos usar o pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nEnt\xe3o, por que o `node_modules` do pnpm \xe9 incomum? Vamos criar dois diret\xf3rios e executar `npm add express` em um deles e `pnpm add express` no outro. Aqui est\xe1 o in\xedcio do `node_modules` do primeiro diret\xf3rio:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nVoc\xea pode ver todo o diret\xf3rio [aqui](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nE \xe9 isso que voc\xea obt\xe9m no `node_modules` criado pelo pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nVoc\xea pode conferir [aqui](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nEnt\xe3o, onde est\xe3o todas as depend\xeancias? Existe apenas uma pasta em `node_modules` chamada `.pnpm` e um link simb\xf3lico chamado `express`. Bem, instalamos apenas `express`, ent\xe3o esse \xe9 o \xfanico pacote que sua aplica\xe7\xe3o tem que ter acesso\\n\\n> Leia mais sobre porque o rigor do pnpm \xe9 uma coisa boa [aqui](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nVamos ver o que est\xe1 dentro de `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` n\xe3o tem `node_modules`? Onde est\xe3o todas as depend\xeancias de `express`?\\n\\nO truque \xe9 que `express` \xe9 apenas um link simb\xf3lico. Quando o Node.js resolve depend\xeancias, ele usa suas localiza\xe7\xf5es reais, portanto, n\xe3o preserva links simb\xf3licos. Mas onde est\xe1 a localiza\xe7\xe3o real de `express`, voc\xea pode perguntar?\\n\\nAqui: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, agora sabemos o prop\xf3sito da pasta `.pnpm/`. `.pnpm/` armazena todos os pacotes em uma estrutura de pastas simples, ent\xe3o cada pacote pode ser encontrado em uma pasta nomeada por este padr\xe3o:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nN\xf3s o chamamos de virtual store directory.\\n\\nEssa estrutura plana evita os problemas de longos diret\xf3rios causados pelo `node_modules` aninhados criado pelo npm v2, mas mant\xe9m os pacotes isolados ao contr\xe1rio dos `node_modules` criados pelo npm v3,4,5,6 ou Yarn v1.\\n\\nAgora vamos olhar para a localiza\xe7\xe3o real de `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\xc9 uma farsa? Ainda falta `node_modules`! O segundo truque da estrutura `node_modules` do pnpm \xe9 que as depend\xeancias dos pacotes est\xe3o no mesmo n\xedvel de diret\xf3rio em que a localiza\xe7\xe3o real da depend\xeancia. Portanto, as depend\xeancias de `express` n\xe3o est\xe3o em `.pnpm/express@4.17.1/node_modules/express/node_modules/` mas em [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nTodas as depend\xeancias de `express` s\xe3o links simb\xf3licos para diret\xf3rios apropriados em `node_modules/.pnpm/`. Colocar depend\xeancias de `express` um n\xedvel acima permite evitar links simb\xf3licos circulares.\\n\\nEnt\xe3o, como voc\xea pode ver, mesmo que o `node_modules` do pnpm pare\xe7a incomum no in\xedcio:\\n\\n1. \xe9 totalmente compat\xedvel com Node.js\\n2. os pacotes s\xe3o bem agrupados com suas depend\xeancias\\n\\nA estrutura \xe9 um pouco [mais complexa](/how-peers-are-resolved) para pacotes com depend\xeancias peer, mas a ideia \xe9 a mesma: usar links simb\xf3licos para criar um aninhamento com uma estrutura de diret\xf3rio simples."}]}')}}]);