# 胜古朝阳 Web端

## 开发方法

### 准备工作

安装以下软件：

- Node.js >= 12
- 对应版本的NPM
- 从NPM上全局安装的Yarn（可选）

### 克隆仓库

```bash
git clone https://gitee.com/qihexiang/sgcy-web.git
cd sgcy-web
```

### 安装依赖和启动

```bash
# 安装了Yarn
yarn && yarn dev
# 未安装Yarn
npm install && npm run dev
```

### 访问页面

浏览器访问<http://localhost:3000>

## 发布方式

创建生产包：`yarn build`，生成的静态文件存放于`dist`目录下。