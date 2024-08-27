import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import Navbar from './My-Component/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from './My-Component/Banner';
import Body from './My-Component/Body';
import Footer from './My-Component/Footer';
import SignUp from './My-Component/Login/SignUp';
export default function App() {
  return (
    <>
      <SignUp/>
    </>
  );
}
