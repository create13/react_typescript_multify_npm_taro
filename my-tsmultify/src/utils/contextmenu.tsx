import React from 'react';
import ReactDOM from 'react-dom';
import format from 'format';
import global from 'global';
import store from '@/store'
import { delRight } from '@/store/actionCreators'
var options: any = {
    /**
     * 右键菜单的样式名称
     */
    wrap : 'contextmenu-wrap',
    /**
     * 遮罩层className
     */
    mask: 'contextnemu-mask',
    /**
     * 点击的元素，由父组件传递过来
     */
    tempObj: null,
    /**
     * 缓存list
     */
    list: [],
    /**
     * 当前菜单元素
     */
    menu: null,
    /**
     * 生成容器
     */
    container: null,
    /**
     * 子项箭头图标
     */
    arrow: 'icon-win-zujian-zanting',
    /**
     * 菜单对象定位
     */
    position: { left: 0, top: 0 }
}

class Init extends React.Component<ContextmenuOptions, any> {
    constructor(config: ContextmenuOptions) {
        super(config);

        this.defaults = Object.assign(this.defaults, config || { });

        var guid = format.guid();
        options.list.push({ guid: guid, items: config });
        
        options.tempObj = config.obj;
        options.position = { left: config.evt.pageX, top: config.evt.pageY };

        this.show(guid);
    }

    protected defaults: ContextmenuOptions = {
        obj: null,
        evt: null,
        title: "",
        items: [],      
        before:(obj):contextmenuResultOptions => { return {} }, 
        complete: function() { },
        callback: function() { }
    }

    show(guid: string) {
        let temps = [];
        for(let i = 0; i < options.list.length; i++) {
            if(options.list[i].guid == guid) {
                temps.push(options.list[i]);
            }
        }

        if(temps.length <= 0) { return; }
        this.control(temps[0].items);
    }

    control(config: ContextmenuOptions) {
        var json = config.before && config.before(options.tempObj);

        json = Object.assign({ hides: [], invalids: [] }, json || { });

        options.menu = { items: config.items, json: json };
    }

    componentDidMount() {
        options.container = document.createElement("div");
        options.container.className = "contextnemu";
        document.body.appendChild(options.container);
        ReactDOM.render(this.renderHTML({items: options.menu.items, json: options.menu.json}), options.container);

        this.defaults.complete && this.defaults.complete();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(options.container);
        document.body.removeChild(options.container);
    }

    OperateLabel (label: string, key: string) {
        if (label === '关闭到右侧') {
            console.log('key', key)
            const action = delRight(key);
            store.dispatch(action);
        }
    }

    renderNode(data: any): any {
        return (
            <ul>
                {
                    data.items.map((item: any, index: any) =>
                        <li key={index}>
                            <dl>
                                {item.label != undefined && item.label != "" ? <dt>{item.label}</dt> : null}
                                {item.items.map((item: any) => this.renderItem(item))}
                            </dl>
                        </li>
                    )
                }
            </ul>
        )
    }

    renderHTML(data: any): any {
        console.log('data', data);
        return (
            <div>
                <div className={options.mask} onClick={this.callbackFun.bind(this, this.defaults.callback)}>
                </div>
                <div className={options.wrap} style={{left: options.position.left + 'px', top: options.position.top + 'px'}}>
                    {this.defaults.title != undefined && this.defaults.title != "" ? <p>{this.defaults.title}</p> : null}
                    {this.renderNode(data)}
                </div>
            </div>
        )
    }

    callbackFun(callback?: Function) {
        callback && callback(options.tempObj);
    }

    renderItem(item: any) {
        var sub = Object.assign({
            code: "",
            label: "",
            icon: "", 
            items: [],       
            complete: function(data: any) { }  
        }, item || { });

        var tempHides = [];
        for(let n = 0; n < options.menu.json.hides.length; n++) {
            if(options.menu.json.hides[n] == sub.code) {
                tempHides.push(sub.code);
            }
        }

        if(tempHides.length > 0) { return null }

        var tempInvalids = [];
        for(let n = 0; n < options.menu.json.invalids.length; n++) {
            if(options.menu.json.invalids[n] == sub.code) {
                tempInvalids.push(sub.code);
            }
        }

        var hasSub = sub.items.length;

        //是否需要置为无效
        var state = tempInvalids.length > 0;

        return (
            <dd className={state ? "invalid" : ""} key={sub.code.toString()}>
                <a href="javascript:;" onClick={this.callbackFun.bind(this, sub.complete)}>
                    <i>{sub.icon}</i>
                    <span onClick={() => {this.OperateLabel(sub.label, sub.key)}}>{sub.label}</span>
                    {hasSub > 0 ? <global.IconFont type={options.arrow} /> : null}
                </a>
                {hasSub > 0 ? this.renderNode({ items: sub.items, json: options.menu.json }) : null}
            </dd>
        )
    }

    render() {
        return null;        
    }
}

export default { Init: Init }