import React, { Component } from 'react'
import TabsControl from './tabsControl'
import Highlight from 'react-highlight'
// import axios from 'axios'
import ajaxRequest from '../api'
// console.log('ajaxRequest', ajaxRequest);
export default class testlight extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listData: [],
             loading: true
        }
    }
    // requestAjax = async() => {
    //     const _this = this;
    //     await axios.post('http://106.12.78.166:12345/api/info/GetApiInfo', {
    //         apiId: 'a001'
    //     })
    //       .then(function (response) {
    //           console.log('then')
    //         console.log('response', response.data.requestExamples);
    //         _this.setState({
    //             listData: response.data.requestExamples,
    //             loading: false
    //         });
    //       })
    //       .catch(function (error) {
    //         console.log('error', error);
    //       });
    // }
    componentWillMount () {
        console.log('componentWillMount');
        // this.requestAjax();
        this.ajaxRequest();
    //     this.setState({
    //         listData: [{tabName: 'JSON', tabCode: 'TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);AppstoreSubscribeGetRequest req = new AppstoreSubscribeGetRequest();req.setNick("tbtest110");req.setLeaseId(14192L);AppstoreSubscribeGetResponse rsp = client.execute(req);System.out.println(rsp.getBody());'}]
    //     })
    }
    componentDidMount () {
        console.log('componentDidMount');
        // this.requestAjax();
    }
    ajaxRequest() {
        const _this = this;
        ajaxRequest({
            url: 'http://106.12.78.166:12345/api/info/GetApiInfo',
            type: 'POST', // 非必填 不填默认是get
            data: {apiId: 'a001'},
            dataType: 'json', // 非必填 默认是json
            async: false, // 非必填 默认是异步
            header: {'Content-type': 'application/json;charset=UTF-8', Accept: 'application/json, text/plain, */*'}, // 非必填 请求头 默认application/json;charset=UTF-8
            success: function(data) {
                console.log('data', JSON.parse(data));
                let stringfyData = JSON.parse(data);
                if (Object.keys(stringfyData).length > 0) {
                    _this.setState({
                        listData: stringfyData.requestExamples,
                        loading: false
                    })
                }
            },
            fail: function (err) {
                console.log('err', err);
            }
        })
    }
    render() {
        console.log('render');
        let {listData, loading} = this.state;
        console.log('listData', listData)
        if (loading) {
            return <div>loading...</div>
        }
        return (
            <div>
                <TabsControl>
                    {listData.map((item, index) => {
                        return (
                            <div title={item.tabName} key={index}>
                                <Highlight className="js">
                                    {item.content}
                                </Highlight>
                            {/* <pre className="brush：js">
                                <code className='js'>{item.content}</code>
                            </pre> */}
                            </div>
                        )
                    })}
                </TabsControl>
            </div>
        )
    }
}
