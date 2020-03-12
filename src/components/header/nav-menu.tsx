import React, {Component} from 'react';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, HomeOutlined} from '@ant-design/icons';

type IProps = {
   
}
type ISate = {
    current: string
}

// const {SubMenu} = Menu;

export class NavMenu extends Component<{},ISate> {
    state: ISate = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        
        console.log(this.state)
        this.setState({
            current: e.key,
        });
    };

    render() {
        console.log(this.state)
        const name: string = 'sfasdf';
        console.log(name)
        console.log(this.state.current)
        console.log(this.state.current)
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <HomeOutlined />
                    Home
                </Menu.Item>
                <Menu.Item key="mail">
                    <MailOutlined />
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app">
                    <AppstoreOutlined />
                    Navigation Two
                </Menu.Item>
            </Menu>
        );
    }
}