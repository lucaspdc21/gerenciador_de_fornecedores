import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from '/logo-generic.svg'
import { Header } from "antd/lib/layout/layout";


const HeaderComponent = () => {
  return (
    <Header>
      <div className='bg-'>
        <img src="/logo-generic.svg" alt="Logo" />
      </div>
    </Header>
  );
};

export default HeaderComponent;
