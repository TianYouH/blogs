# Vue

## 概述

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 基础

### Class 与 Style 绑定

使用动态属性

使用驼峰式写法

```vue
<template>
  <p v-bind:class="{ active: isActive, 'text-danger': hasError }" >使用 class 对象</p>
  <p v-bind:class="classObject" >使用 class 对象</p>
  <p :class="[activeClass, errorClass]" >使用 class 数组</p>

  <p :style="{ color: activeColor, fontSize: fontSize + 'px' }" >使用 style 对象</p>
  <p :style="[baseStyles, overridingStyles]" >使用 style 数组</p>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,

      classObject: {
        active: true,
        'text-danger': false,
      },

      activeClass: 'active',
      errorClass: 'text-danger',

      activeColor: 'red',
      fontSize: 30,

    }
  }
}
</script>
```