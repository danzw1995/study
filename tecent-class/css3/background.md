background

1. background-image: url(a.jpg) | linear-gradient(red, yellow);
  a. 给元素添加背景图片， 可以是图片资源或者渐变颜色
  b. 可以给多个背景图片，用逗号隔开，应用场景（背景图片过大， 用一个小的背景图片，在网速较慢的时候，第一个还没有加载完的时候，显示第二个，体验更好一点）
  c. 如果有多个背景图片的时候，先写的在上面
  d. 如果有多个背景图片，写background-size 等属性的时候，也用, 分开，分别指定对应的背景图片的其他属性

2. background-origin
  表示背景图片在元素的哪一位置显示背景
  a. 默认值为padding-box, 可以取 border-box, content-box;
  b. 一般配合 background-clip 来使用

3. background-origin
  表示在哪个区域开始剪裁背景，外面的就不显示
  a. 默认值为border-box, 取值有padding-box, content-box;
  b. 取值为text 比较特殊，只有在-webkit-内核下才有效

4. background-position
  指定背景出现在元素的哪一位置，这个(原点)是要根据background-origin 来的。
  a. 取值可以是 具体像素
  b. 也可以是百分比
  c. 还可以是关键字. 如 left top right

5. background-size 
  指定背景图片的大小
  a. 默认值为原图的大小
  b. 可以取值 具体像素
  c. 可以百分比
  d. cover, contain,  两者都会保持原图的宽高比, 将图片缩放或者放大为宽度或者高度等于元素的宽度或者高度，区别在于
    cover 背景图片大小可能会大于等于元素的大小
    contain 背景图片大小可能会小于等于元素的大小

6. background-repeat
  指定背景图片的展示方式
  a. 默认值为repeat x, y都进行平铺
  b. repeat-x, repeat-y
  c. round, space 这两个属性是css3加的
    round 在背景图片不能整数的平铺时，根据情况缩放背景图片
    space 在背景图片不能整数的平铺时，使用空白填充间隙
    这两个值可以在一起使用，分别指x, y方向的处理。但是不能只能这两个搭配使用，不能和css2的属性值搭配使用

7. background-attachment
  定义背景图片相对于谁进行固定
  a. 默认值为scroll，相对于元素进行固定, 元素滚动的时候不能跟着滚动
  b. fixed，相对于窗口固定（但是还是属于具体元素的, 如果元素不在那个位置了，背景图片就不展示）
  c. local 相对于元素内容固定，元素滚动的时候会跟着滚动

