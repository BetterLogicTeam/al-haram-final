// import React from 'react'
import "./Food.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Cmodal from "../Cmodal/Cmodal";

export default function Food() {
  return (
    <div className='container-fluid cat mt-5'>

      <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3 border bg-light shadow p-2 "
      fill>

      <Tab eventKey="home" title={<span className="day">MONDAY</span>}>
        <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
       <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="TUESDAY" title={<span className="day">TUESDAY</span>}  >

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="WEDNESDAY" title={<span className="day">WEDNESDAY</span>}>

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="THURSDAY" title={<span className="day">THURSDAY</span>}>

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="FRIDAY" title={<span className="day">FRIDAY</span>}>

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border p-0'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="SATURDAY" title={<span className="day">SATURDAY</span>}>

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border'>
        <h4 className='bld text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>

      <Tab eventKey="SUNDAY" title={<span className="day">SUNDAY</span>}>

      <div className='d-flex justify-content-around mt-5'>
            <h4>Price Per Person $ 59</h4>
            <Cmodal/>
        </div>
        <div className='row mt-5'>
        <div className='col-lg-4 border'>
        <h4 className='bg-info text-white pt-3 pb-3'>BREAKFAST</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>ALOO CHOLA</li>
            <li>HALWA PURI</li>
            <li>SUJI HALWA</li>
            <li>BREAD</li>
            <li>TEA / COFEE</li>
            <li>BUTTER</li>
            <li>JAM & HONEY</li>
            <li>PAYA</li>
            <li>ROTI</li>
            <li>DALIYA</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border'>
        <h4 className='bg-info text-white pt-3 pb-3'>LUNCH</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>CHICKEN MASALA</li>
            <li>GOBI SABZI</li>
            <li>KADHI PAKORA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>

        <div className='col-lg-4 border'>
        <h4 className='bg-info text-white pt-3 pb-3'>DINNER</h4>
        <div className="d-flex justify-content-center">
        <ul className='text-muted typo text-start'>
            <li>KADHI PAKORA</li>
            <li>GOBI SABZI</li>
            <li>CHICKEN MASALA</li>
            <li>ROTI</li>
            <li>GREEN SALAD</li>
            <li>RICE</li>
            <li>ACHAR</li>
            <li>PODINA CHUTNEY</li>
            <li>CHUTNEY</li>
            <li>PAPAD</li>
        </ul>
        </div>
        </div>
        </div>

      </Tab>
    </Tabs>

    <div className='row expl-food'>
    <div className='heading'>
    <h1>EXPLORE FOOD TYPES</h1>
    <p className="text-muted tx">
       DISCOVER BEST THINGS TO DO RESTAURANTS, SHOPPING, HOTELS, CAFES AND PLACES <br/>AROUND THE WORLD BY CATEGORIES
    </p>
    </div>
<div className="container">
    <div className="row">
        <div className="col-md-12">
        <div className='exp-slider mt-5'>
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            loop: true,
          },
        }}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Autoplay]}
        className="mySwiper p-4 "
      >
        <SwiperSlide className="text-center spl">
            <figure className="m-0">
                <img src="./images/Dish-1.png" className="pak"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">PAKISTANI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
            <figure className="m-0">
                <img src="./images/dish-2.png" className="ind"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">INDIAN FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
            <figure className="m-0">
                <img src="./images/dish-2.png" className="bang"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">BANGLADESHI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/Dish-1.png" className="pak"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">PAKISTANI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/dish-2.png" className="bang"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">BANGLADESHI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/Dish-1.png" className="pak"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">PAKISTANI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/dish-2.png" className="bang"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">BANGLADESHI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/Dish-1.png" className="pak"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">PAKISTANI FOOD</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide className="spl">
        <figure className="m-0">
                <img src="./images/dish-2.png" className="bang"/>
                <figcaption className="caption text-white pt-2 pb-2 fgp">BANGLADESHI FOOD</figcaption>
            </figure>
        </SwiperSlide>
      </Swiper>
    </>
    </div>

        </div>
    </div>
</div>
    

    </div>

    </div>
  )
}
