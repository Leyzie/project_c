import React, {Component} from 'react';
import {NavMenu} from './nav-menu';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

type IProps = {
   
}
const stule: React.CSSProperties = {
    display: 'flex'
}
// const {SubMenu} = Menu;

export class NavContainer extends Component<{},{}> {
    render() {
        return (
            <header style={stule}>
                <NavMenu />
                <Avatar icon={<UserOutlined />} />
            </header>
        );
    };
};