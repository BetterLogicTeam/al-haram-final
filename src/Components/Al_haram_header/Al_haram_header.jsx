import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import "./Al_haram_header.css"


function Al_haram_header() {
  return (
    <div className='main_header_main_bg'>
        
            
        <div className='upper_header_bg'>
        <div className="d-flex resP_DIr justify-content-between px-3">
            <div className='social_icons_header px-3'>
                <BsFacebook className='fb_icon me-1 fs-4'></BsFacebook>
                <AiFillTwitterCircle className='twitter_icon me-1 fs-4'></AiFillTwitterCircle>
                <AiFillInstagram className='twitter_icon me-1 fs-4'></AiFillInstagram>
                <FaWhatsappSquare className='twitter_icon me-1 fs-4'></FaWhatsappSquare>
            </div>
            <div className='REspon_pro'>
                <button className='btn al_haram_header_btn'>Become a travel agent</button>
                <button className='btn al_haram_header_btn ms-2'>log in</button>
            </div>
        </div>
        </div>
        
      
        </div>
   
  )
}

export default Al_haram_header
