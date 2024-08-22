import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import Navbar from './My-Component/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from './My-Component/Banner';
import Body from './My-Component/Body';
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Body></Body>
    </>
  );
}
