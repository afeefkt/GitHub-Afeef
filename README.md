# Portfolio Website

This is a personal portfolio website built with HTML, CSS, and JavaScript.

## 🚀 How to Host on GitHub Pages for Free

Follow these steps to deploy your website live on the internet using GitHub Pages.

### 1. Initialize Git (If not already done)
Open your terminal (Command Prompt or PowerShell) in this project folder and run:
```sh
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a Repository on GitHub
1.  Log in to your [GitHub account](https://github.com/).
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  Name your repository (e.g., `my-portfolio` or `username.github.io`).
4.  Keep it **Public** (required for free GitHub Pages).
5.  Click **Create repository**.

### 3. Push Your Code
Copy the commands shown on the GitHub repository page under "…or push an existing repository from the command line" and run them in your terminal. They will look like this:

```sh
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1.  Go to your repository on GitHub.
2.  Click on **Settings** (top tab).
3.  In the left sidebar, click on **Pages**.
4.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5.  Under **Branch**, select `main` and `/ (root)`, then click **Save**.

### 5. Access Your Site
Wait a minute or two for the build to finish. GitHub will display your website URL at the top of the Pages settings (usually `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`).

Click the link to see your live website! 🎉

## 💻 How to Run Locally

You can run this website on your computer in a few ways:

### Method 1: Open File Directly (Simplest)
1.  Navigate to the project folder.
2.  Double-click `index.html`.
3.  It will open in your default web browser.

### Method 2: VS Code Live Server (Recommended)
1.  Open this folder in VS Code.
2.  Install the **Live Server** extension.
3.  Right-click `index.html` and select **Open with Live Server**.

### Method 3: Python Simple Server
If you have Python installed, you can run a local server:
1.  Open your terminal in this folder.
2.  Run: `python -m http.server`
3.  Open `http://localhost:8000` in your browser.
