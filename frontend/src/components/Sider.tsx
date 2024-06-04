'use client';
import React from 'react';
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from 'next/link';


const SiderComponent = () => {

    const menuItems = [
        {label:<Link href="/">Listar Fornecedores</Link>, key: 'home'},
        {label:<Link href="/teste">Adicionar Fornecedores</Link>, key: 'about'},
        {label:<Link href="/teste2">Relatórios</Link>, key: 'contact'},
    ];
    return (
        <Sider
            style={{height: '85vh', paddingTop: '20px', backgroundColor:"white"}}
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
            
            theme='light'
            mode='inline'
            defaultSelectedKeys={['home']}
            style={{height: '100%'}}
            items={menuItems}
            ></Menu>
        </Sider>

    );
};
export default SiderComponent;  