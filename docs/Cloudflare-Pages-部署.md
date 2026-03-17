# Cloudflare Pages 部署说明

这份说明按当前仓库的实际情况编写：

- 站点类型：纯静态站点
- 入口文件：`index.html`
- 静态资源目录：`css/`、`js/`、`images/`、`video/`、`music/`、`fonts/`
- 仓库：`https://github.com/ReBenDish/Cici911`
- 默认生产分支：`main`

## 推荐方案

推荐把主访问地址设为 `www.你的域名`，例如 `www.example.com`。

理由：

- 不需要把整个域名 DNS 托管切到 Cloudflare。
- 只需要在你当前的域名服务商那里新增一条 `CNAME`。
- 对第一次接入 Cloudflare Pages 来说，出错点最少。

如果你坚持用裸域名，也就是 `example.com` 直接访问，请看文末的“裸域名方案”。

## 上线前检查

在 Cloudflare Pages 里，这个项目不需要构建步骤，只需要把仓库根目录作为站点根目录。

当前项目已经满足下面这些条件：

- 仓库根目录有 `index.html`
- 所有资源都使用相对路径
- 不依赖 Node、pnpm、npm build、Vite 或其他构建工具

仓库里这些文件是旧 GitHub Pages/Jekyll 残留：

- `CNAME`
- `_config.yml`
- `index.md`

它们不会被 Cloudflare Pages 使用。现在可以先保留，不影响部署。

## 一次性配置步骤

### 1. 把最新代码推到 GitHub

确保你本地改动已经提交并推送到 `main` 分支。

### 2. 在 Cloudflare 创建 Pages 项目

打开 Cloudflare Dashboard：

1. 进入 `Workers & Pages`
2. 点击 `Create application`
3. 选择 `Pages`
4. 选择 `Connect to Git`
5. 授权 GitHub
6. 选择仓库 `ReBenDish/Cici911`

### 3. 在 Pages 创建页面里填写这些值

按这个项目，建议这样填：

- Project name: `cici911`
- Production branch: `main`
- Framework preset: `None`
- Root directory: 留空
- Build command: 留空
- Build output directory: `/`

如果 Cloudflare 当前界面要求你必须填写 Build command，就填：

```txt
exit 0
```

说明：

- 这个项目没有构建产物目录，比如 `dist` 或 `build`
- 站点内容就直接在仓库根目录
- `/` 表示直接发布仓库根目录内容

### 4. 等待第一次部署成功

成功后你会拿到一个临时地址，形如：

```txt
https://cici911.pages.dev
```

先确认这个地址能正常打开。

## 绑定你自己的域名

### 推荐做法：绑定 `www.你的域名`

假设你的目标域名是：

- 主访问地址：`www.example.com`

那么步骤是：

1. 在 Cloudflare Pages 项目里进入 `Custom domains`
2. 点击 `Set up a custom domain`
3. 输入 `www.example.com`
4. 点击继续

这一步做完以后，Cloudflare 会告诉你需要增加一条 `CNAME`。

然后去你买域名的平台新增 DNS 记录：

- Type: `CNAME`
- Name: `www`
- Target: `cici911.pages.dev`

注意：

- 必须先在 Cloudflare Pages 面板里“添加自定义域名”，再去加 DNS
- 不要只在域名平台里手动加 `CNAME` 而不去 Pages 面板关联

### 可选：把裸域名跳转到 `www`

如果你还希望：

- `example.com` 自动跳转到 `www.example.com`

有两种做法：

1. 在你的域名服务商处做显性 URL 转发
2. 把 DNS 也迁到 Cloudflare，再用 Cloudflare Redirect Rules 做 301 跳转

如果你只是想尽快上线，优先用域名服务商自带的 URL 转发最省事。

## 裸域名方案

如果你希望用户直接访问：

```txt
https://example.com
```

那么按 Cloudflare 官方文档，这个裸域名必须作为 Cloudflare zone 接入同一个 Cloudflare 账号，也就是：

1. 把 `example.com` 添加到 Cloudflare
2. 到域名注册商后台，把 nameserver 改成 Cloudflare 提供的那两个 nameserver
3. 等待域名托管生效
4. 再回到 Pages 项目里添加 `example.com` 作为 custom domain

这个方案的优点是：

- 裸域名可以直接接到 Pages
- 后续你可以在 Cloudflare 里统一做 DNS、HTTPS、Redirect、缓存控制

缺点是：

- 改动更大
- nameserver 生效需要等待
- 如果你目前域名还有别的解析在用，要一并迁移

所以第一次接入更建议先上 `www`，跑通以后再决定要不要迁根域名。

## 建议的最终访问结构

推荐最终结构：

- `www.example.com`：实际站点
- `example.com`：301 跳转到 `www.example.com`
- `cici911.pages.dev`：可选，后续可再重定向到自定义域名

## 常见问题

### 1. `pages.dev` 能打开，但自定义域名打不开

优先检查：

- 你是否先在 Pages 面板里添加了 custom domain
- `CNAME` 是否指向了正确的 `*.pages.dev`
- DNS 是否已经生效

### 2. 自定义域名一直处于 Verifying

优先检查：

- DNS 记录有没有拼错
- 有没有别的规则拦住 HTTP 验证
- 是否配置了 Access、重定向或 Worker 抢先接管该域名

### 3. 打开 `pages.dev` 是 404

这个项目根目录已经有 `index.html`，正常不该出现这个问题。

如果出现，通常说明：

- Root directory 填错了
- Build output directory 填错了

## 当前项目建议填写值速查

直接照这个填：

- Git provider: `GitHub`
- Repository: `ReBenDish/Cici911`
- Production branch: `main`
- Framework preset: `None`
- Root directory: 留空
- Build command: 留空
- Build output directory: `/`

如果界面不让 Build command 留空：

- Build command: `exit 0`

## 你操作时最推荐的顺序

1. 先把 `main` 推到 GitHub
2. 在 Cloudflare Pages 连 GitHub 仓库
3. 用 `pages.dev` 地址先确认站点正常
4. 再绑定 `www.你的域名`
5. 确认 `www` 生效后，再决定要不要处理裸域名跳转

## 后续可做但不是现在必须做的事

- 删除仓库里的 GitHub Pages 残留文件
- 给 `pages.dev` 做重定向到你的正式域名
- 增加 `_headers` 做安全头和缓存控制

## 官方文档

- Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Deploy static HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Redirect `pages.dev` to custom domain: https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/
