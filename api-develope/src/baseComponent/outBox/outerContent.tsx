import React, { Component } from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class OuterContent extends Component<any, any> {
    newTabIndex: number;
    [k: string]: any
    constructor(props:any) {
      super(props)
      const panes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
          title: 'Tab 3',
          content: 'Content of Tab 3',
          key: '3',
          closable: false,
        },
      ];
      this.state = {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0
      };
      this.newTabIndex = 0;
    }
    onChange = (activeKey:any) => {
        this.setState({ activeKey });
      };
    
      onEdit = (targetKey:any, action:any) => {
        this[action](targetKey);
      };
    
      add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = (targetKey:any) => {
        let activeKey = this.state.activeKey;
        let lastIndex:number = 0;
        this.state.panes.forEach((pane:any, i:any) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter((pane:any) => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    render() {
        return (
        <div>
            <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
      >
        {React.Children.map(this.props.children,(element: any,index: number)=>{
            return(
                <TabPane key={index + ''} tab={element}>{element}</TabPane>
                );
        })}
      </Tabs>
        </div>
        )
    }
}
