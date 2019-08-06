declare module 'utils' {
    /**
     * 将input列表数据转换成Json格式
     * @param config 配置信息 Json格式
     * @default id 【必填项】JQuery选择器
     * @default complete : function(data) { } 【选填项】处理完成回调函数
     * @default data 返回的Json数据
     * @default data.state 操作是否成功
     * @default data.member 序列化的Json数据 仅当没有错误时返回   
     */
    export function serialize(config?: serializeOptions) : void;

    /**
     * 数组序列化成json
     * @param array 数组对象
     * @returns json
     */
    export function arraySerialize(array: Array<any>): any;
}