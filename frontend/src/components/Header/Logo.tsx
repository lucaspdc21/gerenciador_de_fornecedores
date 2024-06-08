import Image from 'next/image';
import React from 'react';

const Logo = () => (
  <div className='bg-white p-1 rounded-lg'>
    <Image width={100} src="/logo-generic.svg" alt='logo da empresa' height={100} />
  </div>
);

export default Logo;