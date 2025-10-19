import React, { Suspense } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <main>
        {navigation.state === 'loading' ? (
          <div className="flex justify-center items-center h-full min-h-screen">
            <div className="w-16 h-16 border-4 border-t-purple-500 border-gray-200 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;