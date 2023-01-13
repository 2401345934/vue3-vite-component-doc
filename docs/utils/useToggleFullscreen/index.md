---
createTime: 2022/12/11
tag: 'Vite,公用业务方法'
---

# useToggleFullscreen 全屏方法

## 调用方法

```ts
  Utils.useToggleFullscreen({
             fullscreenFlag: false,
             className: 'aaa'
           })
           
```

## 参数

| 属性   | 说明 |   类型  | 默认值  | 版本  |
| :-------------: | :----------: | :------------: | :------------: | :------------: |
|fullscreenFlag |   true 是全屏  false  取消全屏  | Boolean  | - | 1.2.3|
| className       |    要绘制水印的 id    |        String  | body  |1.2.3 |

## 注意事项

1. 因为浏览器权限问题 需要通过用户点击事件触发才能全屏
