import React from 'react'
import "./Al_haram_main_footer.css"
import {RiPlaystationFill} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import message from "../Assets/message.png"
import play from "../Assets/play.png"
import app from "../Assets/app.png"
import {TiMessage} from "react-icons/ti"
import ico from "../Assets/ico.png"

function Al_haram_main_footer() {
  return (
    <div className='Al_haram_main_footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='text-start'><span className='text-white fs-1 fw-bolder'>A</span><span className='text-white fs-2 fw-bolder'>I</span><span className='ms-2 text-dark fs-1 fw-bolder'>haram</span></h5>
            <p className='text-start text-white'>One of the most trusted travel group providing best services with to its clients since decades. Our director’s lorem ipsum a sons of Maxim’s founder lorem ipsum, are running these companies.lorem ipsum and glow is offering personalised services at every step, as not only a travel agency but also for exclusive.</p>
          </div>
          <div className="col-md-2 mt-3 text-start responsive_pro">
            <h6 className='text-white fw-bold  text-uppercase'>Company</h6>
         <p  className='m-0'>   <a href="" className='footer_links_main'>Home </a></p>
         <p  className='m-0'>     <a href="" className='footer_links_main'>about us </a></p>
         <p  className='m-0'> <a href="" className='footer_links_main'>career </a></p>
         <p  className='m-0'> <a href="" className='footer_links_main'>press</a></p>
         <p  className='m-0'> <a href="" className='footer_links_main'>travel agent</a></p>
         <p  className='m-0'> <a href="" className='footer_links_main'> blog</a></p>
          </div>
         
          <div className="col-md-2 text-start mt-3 responsive_pro">
            <h6 className='text-white fw-bold  text-uppercase'>Services</h6>
         <p className='m-0'>   <a href="" className='footer_links_main'>Uramh package </a></p>
         <p className='m-0'>     <a href="" className='footer_links_main'>Hajj package  </a></p>
         <p className='m-0'> <a href="" className='footer_links_main'>Hotels </a></p>
         <p className='m-0'> <a href="" className='footer_links_main'>Flights </a></p>
         <p className='m-0'> <a href="" className='footer_links_main'>Umrah Guide </a></p>
         <p className='m-0'> <a href="" className='footer_links_main'>Hajj Guide </a></p>
          </div>
          <div className="col-md-2 mt-3 text-start responsive_pro">
            <h6 className='text-white fw-bold  text-uppercase'>Get in touch</h6>
         <p className='m-0'>   <a href="" className='footer_links_main'> al haram </a></p>
         <p className='m-0'>     <a href="" className='footer_links_main'><HiOutlineLocationMarker></HiOutlineLocationMarker>  Al-Aqsa Business Park 8711, Alrehab 
     Dist. Jeddah, Unit No 310, Saudi Arabia
    </a></p>
         <p className='m-0'> <a href="" className='footer_links_main'><img src={message} alt="" /> Arabia
     support@alharam.com
     91 12345678910

</a></p>
          </div>
          <div className="col-md-2 mt-3">
            <h6 className='text-white text-uppercase fs-5 fw-bold text-start'>download our app</h6>
            <div className='d-flex foooter main_footer_button'>
             
              <img src={play} className='play_img' alt="" />
              <p className='ms-2 text-white m-0 '>google play store</p>
            </div>
            <div className='d-flex foooter  main_footer_button mt-2'>
             
              <img src={app} className='play_img' alt="" />
              <p className='ms-2 text-white m-0'>google play store</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
            <p className='text-white text-start'><span className='text-white fw-bold'>Newsletter</span>: subscribe to our newsletter to get your weekly dose of news</p>
         <div className="d-flex RESPONSIVE_PRO">
          
            <div className='position-relative'>
            <img src={ico} className='position-absolute input_imgss' alt="" />
            {/* <TiMessage className='text-dark '></TiMessage> */}
          <input type="email" placeholder='Enter Your Email Adress'   className='main_footer_btn input_logo  ' />

          </div>
          <button className='main_footer_btn submitt'>Submit</button>
         </div>
         
          </div>

          <div className="col-md-6 mt-3">
            <button className='left_button text-start'><BsWhatsapp className='text-start me-2 ms-4 fs-4'></BsWhatsapp>subscribe to our whatsapp channel</button>
          <p className='text-end text-white mt-3'>Terms of Use
| Privacy Policy

</p>
          
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Al_haram_main_footer
