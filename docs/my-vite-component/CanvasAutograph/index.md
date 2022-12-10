---
createTime: 2022/12/10
tag: 'Vite,组件库'
---
# CanvasAutograph 签名组件

## 何时使用

* 需要通过 canvas 签名并且保存的时候使用

## 代码演示

 <CanvasAutograph :config="{
      width: 400, // 宽度
      height: 200, // 高度
      lineWidth: 3, // 线宽
      strokeStyle: 'red', // 线条颜色
      lineCap: 'round', // 设置线条两端圆角
      lineJoin: 'round', // 线条交汇处圆角
    }"></CanvasAutograph>

```vue
<script setup>
import { CanvasAutograph } from '@xiaomh/vue3-alan-vite-component';
</script>

<template>
  <CanvasAutograph></CanvasAutograph>
</template>

<style></style>

```

## API

### 属性说明

| 属性   | 说明 |   类型  | 默认值  | 版本  |
| :-------------: | :----------: | :------------: | :------------: | :------------: |
| config |   config 配置属性   | Object  | {} | 1.2.0|

#### config 属性说明

| 属性   | 说明 |   类型  | 默认值  | 版本  |
| :-------------: | :----------: | :------------: | :------------: | :------------: |
|  width       |    宽度   |        number  | 400|1.2.0|
|  height       |    高度   |        number  |200 |1.2.0|
|  lineWidth       |    线宽   |        number  |3 |1.2.0|
|  strokeStyle       |    线条颜色   |        string  | red |1.2.0|
|  lineCap       |    设置线条两端圆角   |        string  | round |1.2.0|
|  lineJoin       |    线条交汇处圆角   |        string  | round |1.2.0|
