import myViteComponent from "../routers/my-vite-component"
import utils from "../routers/utils"

function addCollapsible(data: any) {
  data.forEach(item => {
    if (item?.items?.length) {
      item.collapsible = true
      item.collapsed = true
      if (Array.isArray(item.items) && item.items.length) {
        addCollapsible(item.items)
      }
    }
  })

  return data
}


const resultList: {
  [key: string]: any
} = {
  '/my-vite-component/': addCollapsible(myViteComponent),
  '/utils/': addCollapsible(utils),
}
export default resultList