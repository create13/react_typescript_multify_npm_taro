const socket = function (config:socketLimit) {
    const original = {
        url: '',
        port: ''
    }
    config = Object.assign(original, config)
    let ws: any;
    //避免重复连接的开关
    let lockReconnect = false;
    // 监听心跳包
    let heartTimer:any = null;
    // 避免处理2次
    let serverTimeoutObj:any = null;
    createWebsocket();
    // 创建一个websocket连接
    function createWebsocket () {
        try {
            ws = new WebSocket(`ws://${config.url}:${config.port}`);
            handlerMessage();
        } catch (e) {
            reconnect();
        }
    }
    // 连接失败，重新连接
    function reconnect () {
        if (lockReconnect) {
            return;
        }
        lockReconnect = true;
        setTimeout(() => {
            createWebsocket();
            lockReconnect = false;
        }, 2000);
    }
    const heartBeat = {
        /**
         * 心跳包时间间隔
         */
        timeout: 60000,
        reset () {
            clearTimeout(heartTimer);
            clearTimeout(serverTimeoutObj);
      　　　this.start();
        },
        start () {
            heartTimer = setTimeout(() => {
                ws.send('heart');
                serverTimeoutObj = setTimeout(() => {
                    ws.close();
                },this.timeout)
            },this.timeout)
        }
    }
    function handlerMessage () {
        ws.onopen = function () {
            heartBeat.start();
        }
        ws.onmessage = function () {
            heartBeat.reset();
        }
        ws.onclose = function () {
            reconnect();
        }
        ws.onerror = function () {
            reconnect();
        }
    }
}
export default socket;