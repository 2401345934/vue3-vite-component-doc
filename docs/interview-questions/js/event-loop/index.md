---
createTime: 2022/11/30
tag: 'js,面试题'
---
# 阐述一下 JS 的事件循环

* 事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。
* 官方叫做 event loop  浏览器叫做 message loop
* 在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列未尾即可。过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
  * 事件循环历史队列
    * 微队列
    * 宏队列
  * 事件循环最新队列 列举三个常见的
    * 微队列
    * 延时队列
    * 交互队列
* 根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。
* 不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行