import head from "./config/head"
import themeConfig from "./config/themeConfig"
import markdown from "./config/markdown"

export default {
  title: "组件库",
  lang: 'zh-CN',
  locale: 'zh_CN',
  description: '组件库',
  lastUpdated: true, // 显示最后更新时间
  markdown,
  themeConfig,
  head,
  base:'/vue3-vite-component-doc',
}