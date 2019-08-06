import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import clipboard from '@/static/image/clipboard.png';
import java from '@/static/image/java.png';
import c from '@/static/image/c.png';
import { connect } from 'react-redux'
import { changeMenu, storageId } from '@/store/actionCreators'
class DocumentCenter extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
            updateDate: '2019-07-05',
            visitedCount: 4286072,
            c: '<div className="header">',
        }
    }
    sdkRun () {
        let menuList = [
            {
                menuType: 'typeDetails',
                menuArray: [
                    { menuSecond: '平台介绍', linkRoute: '/', menukey: 'm001' },
                    { menuSecond: '开发入门', linkRoute: '/documentCenter', menukey: 'm002' },
                    { menuSecond: 'SDK使用说明', linkRoute: '/sdkDirections', menukey: 'm003' }
                ]
            }
        ];
        this.props.history.push('/sdkDirections');
        this.props.changeMenu(menuList);
        this.props.storageId('sdk');
    }
    render() {
        let {updateDate, visitedCount} = this.state;
        return (
            <div className="container"> 
                <div className="header">
                    <h4>API调用方法详解</h4>
                    <div className="page-count">
                        <span className="times">更新日期：{updateDate} </span>
                    </div>
                </div>
                <div className="content-container">
                    <div>开放平台（WTS）的API是基于HTTP协议来调用的，开发者（ISV）可以直接使用WTS提供的<a onClick={() => {this.sdkRun()}}><span>官方SDK</span></a>（支持.NET语言，包含了请求的封装，签名加密，响应解释，性能优化等）来调用，也可以根据WTS的协议来封装HTTP请求进行调用，以下主要是针对自行封装HTTP请求进行API调用的原理进行详细解说。</div>
                    <div><span>调用流程</span></div>
                    <div>根据WTS的协议：填充参数 > 生成签名 > 拼装HTTP请求 > 发起HTTP请求> 得到HTTP响应 > 解释json/xml结果，以下是大体的调用过程示意图：</div>
                    <div><img src={`../${clipboard}`} /></div>
                    <div><span>调用入口</span></div>
                    <div>调用API的服务URL地址，开放平台目前提供了2个环境给ISV使用：正式测试环境，正式环境。</div>
                    <ul>
                        <li><span>正式测试环境：</span> ISV软件上线之前的正式模拟环境，应用创建成功后即可使用。</li>
                        <li><span>正式环境：</span> ISV软件上线之后使用的环境，此环境的入口与正式测试环境一致，只不过应用上线之后，流量限制会进行打开，具体流量限制与应用所属类目有关，比如服务市场类的应用，限制API调用为100万次/天。</li>
                    </ul>
                    <div><br/></div>
                    <div><span>公共参数</span></div>
                    <div>调用任何一个API都必须传入的参数</div>
                    <div><span>业务参数</span></div>
                    <div>API调用除了必须包含公共参数外，如果API本身有业务级的参数也必须传入，每个API的业务级参数请参考API文档说明</div>
                    <div><span>签名算法</span></div>
                    <div>为了防止API调用过程中被黑客恶意篡改，调用任何一个API都需要携带签名，WTS服务端会根据请求参数，对签名进行验证，签名不合法的请求将会被拒绝。WTS目前支持的签名算法有两种：MD5(sign_method=md5)，HMAC_MD5(sign_method=hmac)，签名大体过程如下：</div>
                    <ul>
                        <li>对所有API请求参数（包括公共参数和业务参数，但除去sign参数和byte[]类型的参数），根据参数名称的<a href="http://www.asciima.com/"><span>ASCII</span></a>码表的顺序排序。如：foo:1, bar:2, foo_bar:3, foobar:4排序后的顺序是bar:2, foo:1, foo_bar:3, foobar:4。</li>
                        <li>将排序好的参数名和参数值拼装在一起，根据上面的示例得到的结果为：bar2foo1foo_bar3foobar4。</li>
                        <li>把拼装好的字符串采用utf-8编码，使用签名算法对编码后的字节流进行摘要。如果使用MD5算法，则需要在拼装的字符串前后加上app的secret后，再进行摘要，如：md5(secret+bar2foo1foo_bar3foobar4+secret)；如果使用HMAC_MD5算法，则需要用app的secret初始化摘要算法后，再进行摘要，如：hmac_md5(bar2foo1foo_bar3foobar4)。</li>
                        <li>将摘要得到的字节流结果使用十六进制表示，如：hex(“helloworld”.getBytes(“utf-8”)) = “68656C6C6F776F726C64”</li>
                    </ul>
                    <div>说明：MD5和HMAC_MD5都是128位长度的摘要算法，用16进制表示，一个十六进制的字符能表示4个位，所以签名后的字符串长度固定为32个十六进制字符。</div>
                    <div><em>JAVA签名示例代码</em></div>
                    <div>
                        <img src={`../${java}`} />
                    </div>
                    <div><em>C#签名示例代码</em></div>
                    <div>
                        <img src={`../${c}`} />
                    </div>
                    {/* <div><span>调用示例</span></div>
                    <div>以wts.hr.dept.get调用为例，具体步骤如下：</div>
                    <div><em>1. 设置参数值</em></div>
                    <div>公共参数：</div>
                    <ul>
                        <li>method = “wts.hr.dept.get”</li>
                        <li>app_key = “12345678”</li>
                        <li>token = “test”</li>
                        <li>timestamp = “2016-01-01 12:00:00”</li>
                        <li>sign_method = “md5”</li>
                    </ul>
                    <div>业务参数：</div>
                    <ul>
                        <li>fields = “num_iid,title,nick,price,num”</li>
                        <li>num_iid = 11223344</li>
                        <li>method=</li>
                    </ul>
                    <div><em>2. 按ASCII顺序排序</em></div>
                    <ul>
                        <li>app_key = “12345678”</li>
                        <li>fields = “num_iid,title,nick,price,num”</li>
                        <li>format = “json”</li>
                        <li>method = “wts.attendance.kqrecord.get”</li>
                        <li>num_iid = 11223344</li>
                        <li>session = “test”</li>
                        <li>sign_method = “md5”</li>
                        <li>timestamp = “2016-01-01 12:00:00”</li>
                        <li>v = “2.0”</li>
                    </ul>
                    <div><em>3. 拼接参数名与参数值</em></div>
                    <div><br/></div>
                    <div><em>4. 生成签名</em></div>
                    <div><br/></div>
                    <div><em>5. 组装HTTP请求</em></div>
                    <div>将所有参数名和参数值采用utf-8进行URL编码（参数顺序可随意，但必须要包括签名参数），然后通过GET或POST（含byte[]类型参数）发起请求，如：</div>
                    <div><br/></div> */}
                    <div><span>注意事项</span></div>
                    <ul>
                        <li>所有的请求和响应数据编码皆为utf-8格式，URL里的所有参数名和参数值请做URL编码。如果请求的Content-Type是application/x-www-form-urlencoded，则HTTP Body体里的所有参数值也做URL编码；如果是multipart/form-data格式，每个表单字段的参数值无需编码,但每个表单字段的charset部分需要指定为utf-8。</li>
                        <li>生成签名（sign）仅对未使用SDK进行API调用时需要操作，如使用了WTS官方SDK，该步骤SDK会自动完成。</li>
                    </ul>
                </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        changeMenu(data: any) {
            const action = changeMenu(data);
            dispatch(action);
        },
        storageId(data: any) {
            const action = storageId(data);
            dispatch(action);
        }
	}
}
export default connect(null, mapDispatchToProps)(DocumentCenter);
