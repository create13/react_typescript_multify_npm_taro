var options = {
    /**
     * 鼠标是否已经按下
     */
    isDown: false,
    /**
     * 鼠标指针原始位置
     */
    location: {x : 0, y: 0},
    /**
     * 拖动对象原始位置
     */
    original: {left : 0 , top : 0},
    /**
     * 元素移动当前位置
     */
    current: {left : 0, top : 0},
    /**
     * 父类容器的尺寸
     */
    boxSize: {width: 0, height: 0},
    /**
     * 当前拖曳元素的尺寸
     */
    sonSize: {width: 0, height: 0}
}


var init = (config: dragOptions) => {
    config = Object.assign({
        obj: null,
        evt: null,
        parent: null,
        direction: "all",
        className: "on",
        dragStart: function(data: any) { },
        dragMove: function(data: any) { },
        dragEnd: function(data: any) { },
        complete: function () { } 
    }, config || { });

    config.obj.style.cursor = 'move';

    /**
     * 拖曳开始处理函数
     * @param obj 元素对象
     * @param evt 指针对象
     */
    var dragStart = (obj: any, evt: any) => {

        var parent = obj.parentElement; //拖曳对象的父对象
        if(config.parent != null) {
            parent = config.parent;
        }

        obj.classList.add(config.className); //给拖曳对象增加自定义class

        options.location = { x: evt.pageX, y: evt.pageY }; //鼠标指针初始位置
        options.original = options.current = { left: obj.offsetLeft, top: obj.offsetTop }; //拖动对象初始位置
        options.boxSize = { width: parent.offsetWidth, height: parent.offsetHeight }; //对象容器宽高
        options.sonSize = { width: obj.offsetWidth, height: obj.offsetHeight }; //拖动对象的宽高
        config.dragStart && config.dragStart({ obj: obj, original: options.original, location: options.location, boxSize: options.boxSize, sonSize: options.sonSize });

        options.isDown = true;

        document.onmousemove = function(e) {
            dragMove(obj, e);
        }

        document.onmouseup = function(e) {
            dragEnd(obj, e);
        }

        return false;
    }

    var dragMove = (obj: any, event: any) => {
        console.log(obj);
        if(!options.isDown) { return false; }

        var moveX = options.original.left + event.pageX - options.location.x; //元素移动当前左侧距离
        var moveY = options.original.top + event.pageY - options.location.y; //元素移动当前顶部距离

        if(moveX < 0) {
            moveX = 0;
        } else if(moveX > (options.boxSize.width - options.sonSize.width)) {
            moveX = options.boxSize.width - options.sonSize.width;
        }

        if(moveY < 0) {
            moveY = 0;
        } else if(moveY > (options.boxSize.height - options.sonSize.height)) {
            moveY = options.boxSize.height - options.sonSize.height;
        }

        options.current = { left: moveX, top: moveY }; //拖动元素当前位置

        var position = null;
        if(config.direction && config.direction.toLowerCase() === "x") {
            position = { left: options.current.left };
        } else if(config.direction && config.direction.toLowerCase() === "y") {
            position = { top: options.current.top };
        } else {
            position = options.current;
        }

        config.dragMove && config.dragMove({obj: obj, original: options.original, current: position, boxSize: options.boxSize, sonSize: options.sonSize});

        return false;
    }

    var dragEnd = (obj: any, event: any) => {
        obj.classList.remove(config.className); //给拖曳对象增加自定义class
        config.dragEnd && config.dragEnd({obj: obj, original: options.original, current: options.current, boxSize: options.boxSize, sonSize: options.sonSize});

        document.onmousemove = document.onmouseup = null;
        options.isDown = false;

        config.complete && config.complete();
    }

    dragStart(config.obj, config.evt);
}

export default { init: init }