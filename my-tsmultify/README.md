## 编译流程
1.npm run start 开发版运行 访问链接http://localhost:8082/page1/page1.html
2.npm run build 生产版打包
## 技术栈
1.react
2.redux
3.webpack
4.react-redux
5.redux-saga
6.ts
7.less
8.axios
## 搭建过程 具体参照https://blog.csdn.net/qq_38111015/article/details/89252606
1.安装脚手架
npm install -g create-react-app
2.create-react-app脚手架搭建ts项目
create-react-app 项目名 --scripts-version=react-scripts-ts
3.根目录下新建webpack.config.js文件 贴入webpack出入口配置 打包多页面文件 以及热更新等
(1) 安装glob 获取指定文件内容 放入到entry入口文件中
4.安装所需内容到package.json中 具体安装内容 参照package.json
(1)安装redux ***
npm install --save redux
(2)安装react-redux
npm install --save react-redux
(3)安装路由 ***
npm install --save react-router-dom
(4) 安装redux-saga ***
npm install --save redux-saga
(5) 安装antDesign
npm install antd --save
(6) 安装less less-loader css-loader style-loader等
npm install less less-loader css-loader style-loader -D
(7) 安装ts-loader 并且在webpack.config.js中进行解析配置
(8)  安装axios
npm install axios
5.然后删除src下面的registerServiceWorker.js（该文件用于构建pwa应用用的，暂时我们用不了）和 logo.svg文件（不想处理图片文件）和 App.test.js(用于测试用的)。然后在src下建2个文件夹，将src下的App.css、App.js、index.css、index.js分别粘贴进去
6.进入public文件下，删除favicon.ico和 manifest.json(构建pwa用的）
7.删除当前目录中的node_modules，重新npm install生成
8.npm run start 运行项目
## 文件目录详情
├─dist
│  ├─page1 // 打包出的多页面文件
│  └─page2
├─node_modules // 安装依赖
│ 
├─public // 公共资源文件
└─src
    └─pages 
        ├─page1
        │  ├─api // 接口相关配置
        │  ├─components // 组件内容
        │  │  ├─approval
        │  │  └─outBox
        │  ├─routes // 路由配置
        │  ├─static // 静态资源
        │  │  ├─css
        │  │  └─image
        │  │      └─home
        │  ├─store // redux数据
        │  └─utils // 工具类
        └─page2
            ├─api
            ├─components
            │  ├─approval
            │  └─outBox
            ├─routes
            ├─static
            │  ├─css
            │  └─image
            │      └─home
            ├─store
            └─utils
