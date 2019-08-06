interface TestOptions {
    /**
     * 【必填项】对象ID
     */
    id: string,
    /**
     * 【选填项】对象className
     */
    className: string,
    /**
     * 【选填项】回调函数
     */
    callback?: (data?: any) => void
}

/**
 * 右键菜单模块
 */
interface ContextmenuOptions {
    /**
     * 【必填项】HTMLElement | null
     */
    obj: HTMLElement | null,
    /**
     * 【必填项】事件对象
     */
    evt: any,
    /**
     * 【选填项】菜单名称，为空则不显示 默认不显示
     */
    title?: string,
    /**
     * 【必填项】需要绑定的菜单分组信息
     */
    items:Array<contextmenuGroupOptions>,
    /**
     * 【选填项】右键菜单显示前的回调函数
     * @param obj 当前点击元素对象
     * @return data 该回调函数函数需要返回的对象
     * @return data.hides 需要隐藏的菜单编码列表
     * @return data.invalids 需要置为无效的菜单编码列表
     */
    before?: (obj: HTMLElement) => contextmenuResultOptions,
    /**
     * 【选填项】组件加载完成回调函数
     */
    complete?: Function,
    /**
     * 【选填项】处理完成回调函数
     */
    callback?: Function
}

/**
 * 右键菜单显示前回调函数的返回参数
 */
interface contextmenuResultOptions {
    /**
     * 需要隐藏的菜单编码列表
     */
    hides?:Array<string>,
    /**
     * 需要置为无效的菜单编码列表
     */
    invalids?:Array<string>,
}

/**
 * 右键菜单分组项参数
 */
interface contextmenuGroupOptions {
    /**
     * 【选填项】分组的名称，为空则不显示 默认不显示
     */
    label?:string,
    /**
     * 【必填项】需要绑定的菜单信息
     */
    items:Array<contextmenuItemOptions>
}

/**
 * 右键菜单项参数
 */
interface contextmenuItemOptions {
    /**
     * 【选填项】菜单的编码
     */
    code?:string,
    /**
     * 【必填项】要显示的菜单名称
     */
    label:string,
    /**
     * 【选填项】要显示的菜单图标，为空则不显示 默认不显示
     */
    icon?:string,
    /**
     * 【选填项】点击后的回调函数
     */
    complete?:Function,
    /**
     * 【选填项】需要绑定的菜单分组信息
     */
    items?:Array<contextmenuGroupOptions>
}

/**
 * 表单元素序列化成数组
 */
interface serializeOptions {
    /**
     * 【必填项】序列化对象
     */
    obj: string,
    /** 
     * 【选填项】处理完成后，是否删除 默认删除 
     */
    isDelete?: boolean,
    /**
     * 【选填项】处理完成回调函数
     * @default data 返回的Json数据
     * @default data.state 操作是否成功
     * @default data.member 序列化的Json数据 仅当没有错误时返回  
     */
    complete?: (data: any) => void;
}

interface dragOptions {
    /**
     * 【必填项】需要拖曳的className
     */
    obj: HTMLElement,
    /**
     * 【必填项】事件对象
     */
    evt: any,
    /**
     * 【选填项】拖曳的方向 x:横向 y:纵向 all:全部 默认全部
     */
    direction?: string,
    /**
     * 【选填项】允许拖曳的范围 默认为空
     */
    parent?: HTMLElement,
    /**
     * 【选填项】拖曳开始时的样式 默认为空
     */
    className?: string,
    /**
     * 【选填项】开始拖曳事件
     * @default data 返回的Json数据
     * @default data.obj 拖曳对象
     * @default data.original 拖曳对象初始位置
     * @default data.location 鼠标指针初始位置 
     * @default data.boxSize 拖曳对象容器宽高
     * @default data.sonSize 拖曳对象宽高
     */
    dragStart?: (data: any) => void,
    /**
     * 【选填项】拖曳中事件
     * @default data 返回的Json数据
     * @default data.obj 拖曳对象
     * @default data.original 拖曳对象初始位置
     * @default data.current 拖曳对象当前位置
     * @default data.boxSize 拖曳对象容器宽高
     * @default data.sonSize 拖曳对象宽高
     */
    dragMove?: (data: any) => void,
    /**
     * 【选填项】结束拖曳事件
     * @default data 返回的Json数据
     * @default data.obj 拖曳对象
     * @default data.original 拖曳对象初始位置
     * @default data.current 拖曳结束后拖曳对象的为位置
     * @default data.boxSize 拖曳对象容器宽高
     * @default data.sonSize 拖曳对象宽高
     */
    dragEnd?: (data: any) => void,
    /**
     * 【选填项】处理完成回调函数
     */
    complete?: Function
}
/**
 * @params url 请求地址
 * @params port 端口号
 */
interface socketLimit {
    url: string,
    port: string
}
/**
 * @params url 请求地址
 * @params params 传参对象
 * @params type 传参方式
 * @params loading 请求过程中是否展示loading状态
 */
interface ajaxOption {
    url: string,
    params?: any = {},
    type: string,
    loading: boolean
}