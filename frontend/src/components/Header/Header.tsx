import React from 'react';
import Logo from './Logo';
import UserProfile from './UserProfile';

const HeaderComponent = () => {
  return (
    <header className='bg-blue-950 h-14 sticky top-0 z-10'>
        <nav className='flex justify-between content-center items-center w-[92%] h-full mx-auto '>
          <Logo />
          <UserProfile />
        </nav>
    </header>
  );
};

export default HeaderComponent;
