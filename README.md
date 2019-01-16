# fp-shopping-cart-demo

基于FastProgram和Vuex的购物车示例（内部Demo，因此并不会随着基础库进行维护，请注意）       

#### 目录结构

```shell
├── res
│    └── images                   # 图片资源(可选)
├── src
│    └── components               # 组件脚本(可选)
│    │       ├── MyComponent.vue
│    │       └── ...
│    └── entry                    # 入口脚本(必需)
│          └── index.js
│    └── pages                    # 页面脚本(必需)
│    │     └── index
│    │     │     └── page.vue    
│    │     └── ...
│    └── api                      # 服务调用(可选)
│    │    └── api.js 
│    │           └── ... 
│    └── store                    # 数据状态模块化（可选，建议必需）
│          └── modules
│                 └── module1.js  # 业务模块一
│                 └── ...
└── app.json                      # 配置文件(必需)
```

#### 浏览器模式

```javascript
npm run web-start
```

> 浏览器访问地址：http://localhost:8080/pages/index/web.html

#### 双线程模式

> 内部项目，非开源，如果你想了解更多可以联系我

```javascript
npm run app-build
```
