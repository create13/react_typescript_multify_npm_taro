import React, { Component } from 'react'
import WebSocket from '../../utils/webSocket'
export default class PageJump extends Component{
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    
    componentDidMount() {
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
        // window.parent.postMessage('{}', '*');
        WebSocket({name: 'lee', age: 24});
    }
    btnChange () {
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
    }
    render() {
        return (
            <div className="page-jump">
            <button onClick={() => {this.btnChange()}}>点击出发</button>
                <iframe src="http://192.168.3.211/" id="iframe" className="iframe-content"></iframe>
            </div>
        )
    }
}
