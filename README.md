给所有的包安装同一第三方包

pnpm install react react-dom -w

-r 遍历所有的包，--filter 指定的包进行指令操作

对应应用安装共享的包

pnpm i common -r --filter app-web

执行 app-web 项目的 script，启动项目

pnpm start -r --filter app-web

如果在使用脚手架初始化项目报错时提示缺少包，有可能是脚手架项目没有在项目依赖此包，即非法访问依赖包导致的，pnpm 不允许此行为
解决方式-在项目里加上此依赖

出现依赖包内的包的依赖版本不对导致的错误，可以在根上加上此包版本

pnpmfile.js 更改依赖项修正版本

包的变动可以使用 git diff --name-only 获取上次提交与这次提交的区别列表或 tag 的差异

lerna

https://segmentfault.com/a/1190000023954051

pnpm

https://pnpm.io/zh/how-peers-are-resolved

pnpm 新项目可尝试，因为依赖严格，会导致一些应用在依赖上不严格的情况下报错，而且对 jest 有点不兼容，issue 一堆 jest 的问题

https://github.com/pnpm/pnpm/issues?page=1&q=is%3Aissue+jest
