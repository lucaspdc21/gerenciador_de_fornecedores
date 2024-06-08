import { Avatar } from 'antd';
import React from 'react';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';

const HeaderComponent = () => {
  return (
    <header className='bg-blue-950 h-14 sticky top-0 z-10'>
        <nav className='flex justify-between content-center items-center w-[92%] h-full mx-auto '>
            <div>
                <Image width={100} src="/logo-generic.svg" alt='logo da empresa' />
            </div>
            <div className="flex items-center gap-2 text-white">
                <Avatar size={42} src="/lucas.png"/>
                <div>Lucas Pinheiro</div>
            </div>
        </nav>
    </header>
  );
};

export default HeaderComponent;
