import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { companylogo } from './assets';

import { Home, CreatePost } from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-300 hover:from-pink-500 hover:to-yellow-500 sm:px-8 px-4 py-4'>
        <Link to='/'>
          <img
            src={companylogo}
            alt='logo'
            className='w-[200px] h-[60px] object-contain'
          />
        </Link>
        <Link
          to='/create-post'
          className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
        >
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-cyan-300 via-purple-100 to-blue-300 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
      <footer className='w-full flex justify-center items-center bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <div className='text-center items-center flex'>
          <span className='font-semibold text-black'>Developed By</span>
          <span className='text-[30px] text-[#2d3496] font-bold pl-2'>❤</span>
          <a
            href='https://github.com/arifkhan1990'
            target='_blank'
            className='font-inter font-lg font-bold text-[#882324] px-2 py-2 '
          >
            ARIF KHAN
          </a>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
