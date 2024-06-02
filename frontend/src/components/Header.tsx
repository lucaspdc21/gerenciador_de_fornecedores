import { Avatar } from 'antd';
import React from 'react';
import Sider from 'antd/es/layout/Sider';

const HeaderComponent = () => {
  return (
    <header className='bg-gray-300 h-14 sticky top-0 z-10'>
        <nav className='flex justify-between content-center items-center w-[92%] h-full mx-auto '>
            <div>
                <img width={100} src="/logo-generic.svg" />
            </div>
            <div className="flex items-center gap-2">
                <Avatar size={42} src="/lucas.png"/>
                <div>Lucas Pinheiro</div>
            </div>
        </nav>
    </header>
  );
};

export default HeaderComponent;
