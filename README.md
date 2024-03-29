# KaiJournal

## 简介
本项目包括三个主要部分：客户端应用`journal`，管理员客户端`journal_manager`，以及服务端应用`journal_server`。这个结构旨在为杂志的阅读和管理提供一个全面的解决方案。

## 部分 1: journal (Vue CLI客户端)

### 简介
`journal`是一个使用Vue CLI开发的客户端应用，为用户提供阅读杂志的界面和功能。

### 功能
- 浏览杂志列表
- 阅读杂志文章
- 用户注册和登录
- 文章的收藏和评论

### 技术栈
- Vue.js
- Vuex
- Vue Router
- Axios

### 安装与运行
```bash
cd journal
npm install
npm run serve

## 部分 2: journal_manager (管理员客户端)

### 简介
`journal_manager`是一个专为杂志管理员设计的客户端应用，用于管理杂志内容和用户。

### 功能
- 管理文章（增加、删除、编辑）
- 审核用户评论
- 查看统计信息

### 技术栈
- Vue.js
- Vuex
- Vue Router
- Element UI
- Axios

### 安装与运行
```bash
cd journal_manager
npm install
npm run serve

## 部分 3: journal_server (Node.js服务端)

### 简介
`journal_server`是使用Node.js开发的服务端应用，为客户端提供RESTful API接口。

### 功能
- 用户认证和授权
- 文章和评论的数据管理
- 提供API接口给客户端

### 技术栈
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)

### 安装与运行
```bash
cd journal_server
npm install
cd src
node server.js
