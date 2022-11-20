---
title: vscode-prettire格式化
date: 2022-11-17
tags:
 - prettire
---

# vscode-prettire 格式化

## 安装插件

![](http://liufusong.top/assets/img/image-20220608182053174.314c8764.png)

## 配置文件

在项目根目录新建.prettierrc.js  
```javascript
module.exports = {
  // 一行最多 30 字符
  printWidth: 80,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'auto'
}
```

## 设置默认格式化
1. 打开格式化文件配置
![](http://liufusong.top/assets/img/image-20220608184304331.d309f707.png)

2. 配置默认格式化程序
![](http://liufusong.top/assets/img/image-20220608184519428.d7035625.png)

3. 选择 Prettier
![](http://liufusong.top/assets/img/image-20220608184554419.1bc45861.png)


## 注意点
1. 设置中要勾选 Format On Save
![](http://liufusong.top/assets/img/image-20220608182408404.3d8a2d5b.png)

2. 禁用 eslint 或其他格式化插件
![](http://liufusong.top/assets/img/image-20220608182512785.b5d073a2.png)

