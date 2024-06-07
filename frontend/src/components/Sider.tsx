'use client';
import React from 'react';
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from 'next/link';


const SiderComponent = () => {

    const menuItems = [
        {label:<Link href="/">Listar Fornecedores</Link>, key: 'home'},
        {label:<Link href="/supplier">Adicionar Fornecedores</Link>, key: 'supplier'},
        {label:<Link href="/contract">Adicionar Contrato</Link>, key: 'contract'},
    ];
    return (
        <Sider
            style={{ height: '100%' ,paddingTop: '20px', backgroundColor:"white"}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
            console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            }}
            
        >
            <Menu
            style={{backgroundColor:"white"}}
            theme='light'
            mode='inline'
            defaultSelectedKeys={['home']}
            
            items={menuItems}
            ></Menu>
        </Sider>

    );
};
export default SiderComponent;  