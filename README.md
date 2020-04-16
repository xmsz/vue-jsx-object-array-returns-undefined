# vue-composition-api-tsx-demo
### 这是一个使用 \@vue/composition-api , 并且使用TypeScript来编写代码的demo

## Project setup
```
npm install
```


##注意点
+ .tsx引入对应的css文件时候,可以采用两种方式,一种是
    1. import './index.css' 这样的格式,可以直接使用
    2. import style from './index.module.css' ,这种格式需要我们在shims-vue.d.ts中作配置,且对应的应用方式也不同.这里需要注意的是, .css文件需要有 .module.css 结尾,否则文件会引入失败
+ babel.config.js的配置需要作相应的修改



