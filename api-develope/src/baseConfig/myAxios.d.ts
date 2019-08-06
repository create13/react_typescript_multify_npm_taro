declare module 'myAxios' {
    export function blueData(params: any): any
    export function addData(): any
    export function language (params: any): any
}
declare module 'qs' {
    const qs: any;
    export default qs;
}
declare module 'fs' {
    const fs: any;
    export default fs;
}
interface ajaxOption {
    url: string,
    params?: any = {},
    type: string,
    loading: boolean
}