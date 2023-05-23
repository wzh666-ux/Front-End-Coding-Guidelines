---
home: true
title: 开发规范手册
heroText: 开发规范手册
heroImage: logo.png
tagline: 前端开发
actions:
  - text: 开始学习 →
    link: /projectStruct/
    type: primary
features:
  - title: Markdown 增强
    icon: fa6-brands:markdown
    details: 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
  - title: 布局增强
    icon: fa6-solid:object-group
    details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
  - title: 深色模式
    icon: fa6-solid:circle-half-stroke
    details: 可以自由切换浅色模式与深色模式
  - title: 复制按钮
    icon: fa6-solid:copy
    details: 一键复制代码块中的代码
---

##

::: playground#vue vue演示

@file App.vue

```vue
<script setup>
import { ref } from "vue";

import Comp from "./Comp.vue";

const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file Comp.vue

```vue
<template>
  <div>Comp</div>
</template>
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js"
  }
}
```

:::


