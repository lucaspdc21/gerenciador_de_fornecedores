import { Avatar } from 'antd';
import React from 'react';

const UserProfile = () => (
  <div className="flex items-center gap-2 text-white text-sm ">
    <Avatar size={42} src="/lucas.png"/>
    <div>Lucas Pinheiro</div>
  </div>
);

export default UserProfile;