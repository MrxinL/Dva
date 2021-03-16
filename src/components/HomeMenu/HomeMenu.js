import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import style from './index.less';

const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className={style.div}>
        {/* <Button 
        	type="primary" 
			onClick={this.toggleCollapsed} 
			className={style.adjustbutton}
			>
          	{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        <Menu
          className={style.view}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            任务中心
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            辅导班
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            学员管理
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="学员管理">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            订单管理
          </Menu.Item>
          <Menu.Item key="7" icon={<ContainerOutlined />}>
            业绩管理管理
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Home;
