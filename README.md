# 胜古朝阳2022 Web端开发

目前Web端尚未接入后端接口，访问内容的形式为：

获取存放与固定位置的元数据文件`tree.json` -> 解析文件 -> 根据解析结果生成页面上的链接 -> 访问链接 -> 根据解析结果，获取对应文件 -> 渲染。

在当前环境下，文章内容需要放置到开发目录的子目录（`public/posts`）下，为了后续开发和内容管理的方便，使用了`git submodule`功能来进行管理。

因此，要获取完整的开发环境，需要进行如下操作：

> 以下假设你已经配置好了自己的Gitee账户的SSH密钥

```sh
git clone git@gitee.com:buctsnc/shenggu-chaoyang_web.git
cd shenggu-chaoyang_web 
git submodule update
code . # 或者用你的其他编辑器打开这个目录
```

在编辑器中，你可以检查`public/posts`目录下是否有文件。

成功之后准备开发环境。开发环境要求安装Node.js，包管理器可以使用npm（一般是Node.js默认安装的）、yarn（推荐，因为已经将`yarn.lock`文件推送到仓库了）、pnpm。

> 安装yarn的方式为：`npm install yarn -g`，注意如果使用Windows Powershell作为执行环境的话，请首先使用管理员权限运行Powershell并执行`Set-ExecutionPolicy RemoteSigned`。

随后在Code的集成终端中执行：

```sh
# 安装依赖项目和开发工具
yarn # 若使用npm，则运行npm install
# 将内容元数据生成脚本编译为JavaScript
yarn makeOcta # npm run makeOcta
# 生成元数据文件
yarn octa # npm run octa
# 启动开发环境
yarn dev # npm run dev
```

第一次启动开发环境的时间会稍微长一些，它会将依赖的外部库编译打包，启动成功之后，可以在`http://localhost:3000/`访问到页面。如果3000端口已经占用，开发环境会使用其他端口，应该在终端输出中寻找。
