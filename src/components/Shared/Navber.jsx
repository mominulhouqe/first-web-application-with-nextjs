"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';


const items = [
  {
    key: 'Home' ,
    label: <Link href="/counter">Home</Link>,
    icon: <MailOutlined />,
  },
  {
    label: 'About',
    key: 'about',
    icon: <AppstoreOutlined />,

  },

];
const Navber = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navber;