# 1. 创建项目
    npm install -g create-react-app
    create-react-app yanxuan-react
    
# 2. 添加stylus构建环境(默认不支持)
## 2.1. 下载依赖
    npm install --save stylus stylus-loader
    
## 2.2. 暴露项目依赖和webpack配置
    npm run eject
    
## 2.3. 修改webpack配置: 添加stylus-loader的相关配置
    1). webpack.config.dev.js: 开发环境
        const stylusRegex = /\.(styl|stylus)$/;
        const stylusModuleRegex = /\.module\.(stylus)$/;
        
        {
          test: stylusRegex,
          exclude: stylusModuleRegex,
          use: getStyleLoaders({ importLoaders: 2 }, 'stylus-loader'),
        },
        {
          test: stylusModuleRegex,
          use: getStyleLoaders(
            {
              importLoaders: 2,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
            'stylus-loader'
          ),
        },
    2). webpack.config.prod.js: 生产环境
        const stylusRegex = /\.(styl|stylus)$/;
        const stylusModuleRegex = /\.module\.(stylus)$/;
        
        {
          test: stylusRegex,
          exclude: stylusModuleRegex,
          loader: getStyleLoaders(
            {
              importLoaders: 2,
              sourceMap: shouldUseSourceMap,
            },
            'stylus-loader'
          ),
          sideEffects: true,
        },
        {
          test: stylusModuleRegex,
          loader: getStyleLoaders(
            {
              importLoaders: 2,
              sourceMap: shouldUseSourceMap,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
            'stylus-loader'
          ),
        },
# 3. 解决相关问题
## 3.1. 移动端viewport
    <meta name="viewport"
              content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
## 3.2. 移动端300ms延迟问题
    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
    <script>
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
          FastClick.attach(document.body);
        }, false);
      }
      if (!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
          '>' + '<' + '/' + 'script>');
      }
    </script>
## 3.3. 移动端rem适配
    <script>
      (function (width) {
        const fontSize = (window.innerWidth || document.documentElement.clientWidth) / width * 100 + "px";
        document.documentElement.style.fontSize = fontSize;
        document.body.style.fontSize = "12px";
      })(750)
    </script>
## 3.4. 重置css
    public/css/reset.css
        /**
         * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
         * http://cssreset.com
         */
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video, input {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-weight: normal;
          vertical-align: baseline;
        }
        
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, menu, nav, section {
          display: block;
        }
        
        body {
          line-height: 1;
        }
        
        blockquote, q {
          quotes: none;
        }
        
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: none;
        }
        
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        
        /* custom */
        a {
          color: #7e8c8d;
          text-decoration: none;
          -webkit-backface-visibility: hidden;
        }
        
        li {
          list-style: none;
        }
        
        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        
        ::-webkit-scrollbar-track-piece {
          background-color: rgba(0, 0, 0, 0.2);
          -webkit-border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:vertical {
          height: 5px;
          background-color: rgba(125, 125, 125, 0.7);
          -webkit-border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:horizontal {
          width: 5px;
          background-color: rgba(125, 125, 125, 0.7);
          -webkit-border-radius: 6px;
        }
        
        html, body {
          width: 100%;
          height: 100%;
        }
        
        body {
          -webkit-text-size-adjust: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        
        .ellipsis{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        *{
          box-sizing: border-box;
        }
        
        i{
          font-style: normal;
        }
    引入reset: index.html
        <link rel="stylesheet" href="/css/reset.css">
# 4. 实现基本的react组件化编程
## 4.1. 应用根组件: App.jsx
    import React, {Component} from 'react'
    export default class App extends Component {
      render () {
        return (
          <div>App</div>
        )
      }
    }
  
## 4.2. 入口js: index.js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'
    
    ReactDOM.render((
      <App/>
    ), document.getElementById('root'))

# 5. 引入路由
## 5.1. 下载依赖
    npm install --save react-router-dom
    
## 6.1. 

# 6. 引入redux
## 6.1. 下载依赖
     npm install --save redux@3.7.2 react-redux redux-thunk
     npm install --save-dev redux-devtools-extension