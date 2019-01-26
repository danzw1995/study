

一、关系型选择器
  1. E + F  选择F选择器，同时是E选择器的相邻兄弟节点
  2. E ~ F  选择F选择器，同时是E选择器的兄弟节点

二、属性选择器
  ---css2---
  1. E[attr~='val'] 选择属性attr值含有val单词的E元素(val 与其他字符需要空格隔开)
  2. E[attr|='val'] 选择属性attr值以val开头的E元素(attr == val或者val与其他字符以'-'相连)
  ---css3(与正则类似)----
  3. E[attr*='val'] 选择属性attr值含有val的E元素
  4. E[attr^='val'] 选择属性attr以val开头的E元素,只要以val开头就行，没有其他要求
  5. E[attr$='val'] 选择属性attr以val结尾的E元素,规则同上

三、伪元素选择器
  1. E::placeholder  
    input元素的placeholder属性,只支持部分css属性。且各个浏览器都有差异
    chrome : color, background, line-height, text-align, font-size
    firefox: line-height 不支持
    以上只测试了这些属性
  2. E::selection 选择器匹配被用户选取的选取是部分
    目前支持 color, background属性

四、伪类选择器
  1. E:not(s) 匹配非指定元素/选择器的E元素
  2. :root 匹配根元素，在html 中即html元素
  3. :target url 带有后面跟有锚名称 #，指向文档内某个具体的元素。这个被链接的元素就是目标元素,可用于选取当前活动的目标元素（很牛逼的选择器）。

  4. E:first-child    选择E元素父级元素的子元素E（第一个子元素且是E的元素）
  5. E:last-child     选择元素父级元素的子元素E（最后一个子元素且是E的元素）
  6. E:only-child     选择E元素父级元素的子元素E（只有一个子元素且为E的元素）
  7. E:nth-child(n)   选择E元素父级元素的子元素E（第n个子元素而且是E的元素）
  8. E:nth-lase-child(n)  选择E元素父级元素的子元素E（倒数第n个子元素而且是E的元素）
  9. E:first-of-type   选择E元素父级元素的子元素E（第一个为E类型的子元素，不一定是第一个子元素）
  10. E:last-of-type   选择E元素父级元素的子元素E（最后一个为E类型的子元素，不一定是最后一个子元素）
  11. E:only-of-type 选择E元素父级元素的子元素E（只有一个E类型的元素,不一定只有一个子元素）
  12. E:nth-of-type 选择E元素父级元素的子元素E（第n个E类型的元素）
  13. E:nth-of-last-type 选择E元素父级元素的子元素E（倒数第n个E类型的元素）
  14. E:empty  选择没有子元素（包括文本节点）的E元素。
  15. E:checked 单复选框被选中时的元素
  16. E:enabled 选择启用的元素（一般是表单元素）
  17. E:disabled 选择禁用的元素（一般为表单元素）
  18. E:only-read 选择只读的元素（一般是表单元素）
  19. E:read-write  选择可读可写的元素 (表单元素)

