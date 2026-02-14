# 推送到 GitHub

本地已完成：`git init`、`git add .`、`git commit`，当前分支为 `main`。

## 你需要做的

1. **在 GitHub 新建仓库**  
   打开 https://github.com/new ，填写仓库名（如 `wangye`），选 Public，不要勾选 README / .gitignore，点 Create repository。

2. **在项目目录执行**（把 `你的用户名` 和 `仓库名` 换成你的）：

   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

   若用 SSH：

   ```bash
   git remote add origin git@github.com:你的用户名/仓库名.git
   git push -u origin main
   ```

推送完成后即可在 GitHub 上看到代码。
