const globalState = {
    listData: [], // 默认菜单
    maskStatus: false, // 弹出框状态
    lanStorage: [], // 存储多语言
    menuList: [
        {
            // menuFirst: '',
            menuArray: [
                { menuSecond: '平台介绍', linkRoute: '/', menukey: 'm001' },
                { menuSecond: '开发入门', linkRoute: '/documentCenter', menukey: 'm002' },
                { menuSecond: 'SDK使用说明', linkRoute: '/sdkDirections', menukey: 'm003' }
            ]
        }
    ], // 文档中心左侧菜单
    defaultId: [],
    menuStatus: true, // 是否显示左侧菜单
    selectFirst: false // 左侧菜单默认选中第一个
}
export default {
    globalState
}