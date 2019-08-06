declare module 'format' {
    /**
     * 按照指定规则格式化日期
     * @param fmt 格式化的规则
     * @return 格式化日期后的字符串
     */
    export function formatDate(fmt: string): string;

    /**
     * 增加年份，支持减少年份
     * @param value 增加几年，如值为负数，即减少年份
     * @param str 当前年份
     * @param fmt 增加后的格式
     * @returns 增加后的年份
     */
    export function addYears(str: string, value: number, fmt: string): string;

    /**
     * 增加月份，支持减少月份
     * @param value 增加几月，如值为负数，即减少月份
     * @param str 当前月份
     * @param fmt 增加后的格式
     * @returns 增加后的月份 
     */
    export function addMonths(str: string, value: number, fmt: string): string;

    /**
     * 增加天数，支持减少天数
     * @param value 增加几天，如值为负数，即减少天数
     * @param str 当前天数
     * @param fmt 增加后的格式
     * @returns 增加后的日期
     */
    export function addDays(str: string, value: number, fmt: string): string;
    
    /**
     * 按照指定规则格式化日期字符串
     * @param str 当前日期字符串
     * @param fmt 格式化规则
     * @returns 格式化后的日期字符串
     */
    export function formatDateString(str: string, fmt:string): string;

    /**
     * 用目标对象替换字符串形参
     * @param str 字符串形参
     * @param restArgs 目标对象
     * @returns 替换后的字符串
     */
    export function formatString(str: string, ...args: any): string;

    /**
     * 数组去重
     * @param arr 需要去重的数组
     * @returns 去重后的新数组
     */
    export function unique(arr: Array<string | number>): any;

    /**
     * 生成GUID
     */
    export function guid(): string;

    /**
     * 生成时间戳
     */
    export function unix(): string;
}