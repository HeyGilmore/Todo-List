# To-Do List

## 🛠️ Tech Stack

- JavaScript (ES6+)
- HTML5
- CSS3 (with Bootstrap 5)
- Webpack
  - `webpack`, `webpack-cli`, `webpack-dev-server`
  - `html-webpack-plugin`
  - `style-loader`, `css-loader`
  - `bootstrap`, `@popperjs/core`

---

## 📦 Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/heyGilmore/todo-list.git
   cd todo-list
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app locally:**
   ```bash
   npx webpack serve
   ```

# Open http://localhost:8080/

4. **Build for production:**
   ```bash
   npx run build
   ```

---

## Project Todo List

### Setup

- [x] Create "ToDo List" folder
- [x] Installed Webpack and required loaders:
  - webpack, webpack-cli
  - html-webpack-plugin
  - style-loader, css-loader
  - webpack-dev-server
- [x] Create Basic project structure:
  - index.html
  - src/js/script.js
  - src/css/stylesheet.css
- [x] Configure webpack.config.js
- [x] Add stylesheet.css to script.js
- [x] Initialize with Github
- [x] Set up basic HTML boilerplate
- [x] Run Webpack build successfully
  - npx webpack serve
  - http://localhost:8080/
- [x] Add Bootstrap
  - npm i bootstrap@5.3.5
- [x] Import Bootstrap to JS
  - import "bootstrap/dist/css/bootstrap.min.css";
  - import "bootstrap";
- [x] Add Popper Bootstrap
  - npm install @popperjs/core
