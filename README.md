# 运营平台前端解决方案
> 基于 gulp、高效、跨平台(Mac & Win)、可定制的运营平台前端解决方案。

## 功能特性
#### 自动化流程
- html、js、css 压缩
- js、css按需加载
#### 调试 & 部署
- 监听文件变动，自动刷新浏览器
- ZIP 项目打包
#### 集成解决方案
- PC、移动端适配（bootstrap响应式框架）解决方案
- 去缓存文件MD5解决方案

## 目录结构
```
rsjf-platform/
├── README.md  						    // 项目说明文档
├── package.json  						// 项目配置文件
├── .bowerrc 							// 配置bower下载包的路径
├── bower.json    						// bower配置文件、说明文件
├── dist.zip    						// 生产压缩包
└── docs           						// 项目原型、UI、需求文档
│   ├── keZhan
│	├── faChan							
└── app           						// 项目开发目录
    ├── 404.html						// 404页面
    ├── app.js							// 入口脚本文件
    ├── bootstrap.js					// requirejs配置文件
    ├── index.html						// 入口页面
 	├── lib             				// 第三方插件包
 	│ 	├── angularjs
 	│   └── require
 	├── assets             				// 静态资源文件
 	│ 	├── images
 	│   ├── fonts
 	│ 	└── css
 	└── modules         				// 项目模块
 		├── common      				// 公共模块
 		│   └── login                   // 公共组件、页面
  		├── keZhan
 		│   └── index   				// 页面
 		│       ├── index.ctrl.js
 		│		├── index.svr.js
 		│		├── index.css
 		│		├── index.html
 		│		└── index.dir.js
        └── faChang
```

## 任务说明
#### 环境搭建
##### 安装nodejs
下载并安装nodejs   https://nodejs.org/
##### 安装git
下载并安装git  https://git-scm.com/download/
##### 安装全局gulp
命令行工具执行 `npm install -g gulp`

#### 1、进入项目目录
```
cd rsjf-platform
```
打开命令行工具进入到项目目录
#### 2、安装第三方插件包与nodejs包
```
npm install && bower install
```
在项目根目录上安装第三方插件包与nodejs包
#### 3、开发任务
```
gulp dev
```
安装第三方插件包后，执行 `gulp dev`，包含以下过程：
1. 复制第三方插件到`app/lib`目录
2. 以app目录作为根目录启动HTTP服务器，自动打开浏览器
3. 监听目录下所有html、js、css文件变动，自动刷新浏览器
#### 4、生产任务
```
gulp build
```
开发完成后，执行 `gulp build` 生成文件并最终压缩成zip包，包含以下过程：
1. 复制第三方插件到`app/lib`目录
2. 打上 md5 签名压缩html\js\css并输出到 dist 文件夹
3. 把 dist压缩成zip


## 常用问题
- 执行gulp dev 报`Error: cannot find module 'gulp-xxx'`错
```
包没找到，执行 npm install gulp-xxx 安装
```
- 报错`Local gulp not found in rsjf-platform`
```
先install全局gulp, 再install本地gulp
```
