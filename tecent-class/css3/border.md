border 

一、 border-radius 圆角属性
    border-radius: 1px 2px 3px 4px  -- 分别代表 左上、右上、右下、左下
    border-radius: 1px 2px 3px  -- 分别代表 左上、（右上、左下）、右下

    其本质是 长半径a, 短半径b的 圆/椭圆 与元素相切部分之间的圆弧
    border-radius 也可以分开写 
    border-top-left-radius . 注意是先上下，后左右
    半径其实可以写两个值，分别代表水平方向，垂直方向上的半径
    border-top-left-radius: 5px / 2px

二、box-shadow 
    盒子阴影， 分为内阴影，外阴影，默认为外阴影
    box-shadow: 1px 2px 3px 4px #fff;  分别为水平方向上的偏移量、垂直方向上的偏移量、模糊半径、扩展半径、颜色
    1. 水平方向上的偏移量为正 向右偏移，为负向左偏移
    2. 垂直方向上的偏移量为正，向下偏移，为负向上偏移
    3. 注意模糊半径是以边界为中心，同时向外向内模糊, 模糊半径不能为负
    4. 扩展半径指的是阴影的大小扩展程度，为正，则阴影增大，为负，正缩小
    5. 阴影在背景的上边，在文字的下面
    6. 阴影不占布局空间
    7. 阴影可以叠加，写在前面的阴影在上面，后面的在下面

三、 border-image
    border-image: source slice width outset repeat;

    1. border-image-source: url(../../as.jpg) || linear-gradient(red, yellow);
    可以选择资源文件 或者 渐变颜色
    2. border-image-slice: 10
        这个属性有点难搞，是表示在哪个位置分割border-image, 可以取5个值， 
        前4个值分别表示上右下左，如果不满4个则类似于border表示的标准。 最后一个值可以选择fill 填充内容区域(好像没有什么必要);
        默认值是100%；即只有四个角有，其他区域为空
        因为实际是这四条线将borde-image 分成9个区域
        ![Image text](https://img-blog.csdn.net/20171222112033887?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMjQxNDcwNTE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
        100%的时候，只有4个角分配到了。中间的没有分配到
    3. border-image-width: 1 || 100px || 100%
        a. 默认值为auto, 即根据slice来
        b. 可以取数字，表示相对于border-width 的值，
        c. 可以取具体像素，宽度即为具体像素
        d. 取百分比，相对于border-width 的值
    4. border-image-outset
        border-image 向外偏移的距离，不支持负值
        a. 为数字的情况 为border-width的倍数
        b. 像素，具体像素
        c. 负值无效

    5. border-image-repeat
        a. strech 拉伸， 默认值，中间区域会默认拉伸
        b. repeat 平铺，中间区域会平铺
        c. round 与repeat 类似，区别在与，如果中间的区域小于n + 0.5个背景时，会拉伸，否则加入一个新的
        d. space 与repeat类似，区别在于，如果中间的区域小于n + 0.5个背景时，会用空白填充
   