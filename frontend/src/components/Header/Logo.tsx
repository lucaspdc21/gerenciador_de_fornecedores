import Image from 'next/image';
import React from 'react';

const Logo = () => (
  <div>
    <Image width={100} src="/logo-generic.svg" alt='logo da empresa' height={100} />
  </div>
);

export default Logo;