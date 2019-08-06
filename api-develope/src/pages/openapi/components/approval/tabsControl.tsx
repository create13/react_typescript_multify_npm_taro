import React from "react"
// tab切换组件
class TabsControl extends React.Component<any, any>{
	constructor(props: any){
		super(props)
		this.state = {
			currentIndex : 0
		}
	}

	check_title_index(index :number){
		return index === this.state.currentIndex ? "selected" : ""
	}

	check_item_index(index :number){
		return index === this.state.currentIndex ? "tab-content selected" : "tab-content"
	}

	render(){
		return(
			<div className="tab-container">
				{ /* 动态生成Tab导航 */ }
				<div className="nav-tab">
			<ul>
				{
				React.Children.map( this.props.children , (element :any ,index) => {
					return(
					<li onClick={() => {this.setState({ currentIndex : index })} } className={ this.check_title_index(index) }><span>{ element.props.title  }</span></li>
					)
				})
				}
			</ul>
				</div>
				{ /* Tab内容区域 */ }
				<div className="tab_item_wrap">
					{
						React.Children.map(this.props.children,(element :any, index)=>{
							return(
								<div className={this.check_item_index(index)}>{element}</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default TabsControl