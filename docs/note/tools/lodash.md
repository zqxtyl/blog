---
title: lodash
date: 2022-11-16
tags:
 - lodash

---

## 安装

#### 1.通过npm

```javascript
npm i lodash
```
#### 2.引入

```javascript
import {} from 'lodash'
```

## 常用方法

### cloneDeep
实现深拷贝

```javascript
// 引入lodash
import lodash from 'lodash'
const allChannels = [
  { name: '前端', id: 1},
  { name: 'java', id: 2},
  { name: 'python', id: 3},
  { name: '产品', id: 4 },
  { name: '前端', id: 1},
]
// 实现深拷贝allChannels
const allChannelsCopy = lodash.cloneDeep(allChannels)
```

### debounce
实现防抖

```vue
<template>
  <!-- 定义count累加按钮 -->
  <div>
    <button @click="addCount">{{count}}</button>
  </div>
</template>

<script lang='ts' setup>
// 引入lodash
import lodash from 'lodash'
// 引入ref
import { ref } from 'vue'
// 定义count数据
const count = ref(0)
// 定义addCount方法，并进行防抖处理
const addCount = lodash.debounce(() => {
  count.value++
}, 1000)
</script>

<style lang='less' scoped></style>
```

### differenceBy
数组差集

```javascript
const allChannels = [
  { name: '前端', id: 1},
  { name: 'java', id: 2},
  { name: 'python', id: 3},
  { name: '产品', id: 4 },
  { name: '前端', id: 1},
]
const myChannels = [
  { name: '前端', id: 1},
]

// 利用lodash实现allChannels和myChannels的差集
const diffChannels = lodash.differenceBy(allChannels, myChannels, 'id')
```

### uniqBy
数组去重

```javascript
const allChannels = [
  { name: '前端', id: 1},
  { name: 'java', id: 2},
  { name: 'python', id: 3},
  { name: '产品', id: 4 },
  { name: '前端', id: 1},
]

// 实现allChannels数组去重
const uniqueChannels = lodash.uniqBy(allChannels, 'name')
```

### sortBy
排序

```javascript
const allChannels = [
  { name: '前端', id: 1},
  { name: 'java', id: 3},
  { name: 'python', id: 2},
  { name: '产品', id: 4 }
]

// allChannels按照id进行排序
const sortedChannels = lodash.sortBy(allChannels, ['id'])
```

### intersectionBy
交集

```javascript
const allChannels = [
  { name: '前端', id: 1},
  { name: 'java', id: 3 },
  { name: 'python', id: 2},
  { name: '产品', id: 4 }
]

const myChannels = [
  { name: '前端', id: 1 },
  { name: 'python', id: 2 },
  { name: '测试', id: 3},
]
// 求allChannels和myChannels的交集
const intersection = lodash.intersectionBy(allChannels, myChannels, 'id')
```

### isEmpty
判断对象是否为空

```javascript
const obj = {}
// 判断obj是否为空
const isEmpty = lodash.isEmpty(obj)
```