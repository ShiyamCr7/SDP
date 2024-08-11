import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <div className='h-screen w-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
