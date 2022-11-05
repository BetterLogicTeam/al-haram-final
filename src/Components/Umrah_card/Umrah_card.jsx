import React from 'react'
import Rating from '@mui/material/Rating';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import { Icon } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import MosqueIcon from '@mui/icons-material/Mosque';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import {FaCcVisa } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Umrah_card.css"
function Umrah_card() {
  return (
    <div>

    <div class="card shadow mb-4">
      <div class="  row g-0">
        <div class="col-md-4">
          <img src="depositphotos_311884494-stock-photo-masjid-al-haram-muslims-holiest 2.png" class="img-fluid rounded-start w-100" alt="..."/>
    </div>
        <div class="col-md-8">
          <div class="card-body text-start ">
          <span><h6 class="card-title  fs-5">Classes Umrah Package 
            <Rating name=""  className='fs-6 ps-2'  defaultValue={5} precision={5} /></h6></span>  
    <div className='  d-flex d-md-grid justify-content-end '><span className='text-dark  text-end   fs-6 '>Per Person</span>
     <h4 className=' float-end'><CurrencyRupeeIcon />120,000 </h4></div>
    
            
             <div className='row '>
           <div className="col-12">
            <div className="row mb-2">
            <div class="col-lg-4 col-5">
                     <CalendarMonthIcon/> 10 days  
                </div>
                <div class="col-lg-4 col-7">
                    <PeopleAltIcon/> 50 Members
                </div>
            </div>
    
           </div>
           <div className="row">
           
           </div>
                
                </div>  
               
                <div className='row'>
           <div className="col-12">
            <div className="row">
            <div class="col-lg-4  col-5 fs-6 ">
                     <CalendarMonthIcon/> 13 Sep 2022
                </div>
                <div class="col-lg-4  col-7 fs-6">
                     <LocationOnIcon/> Multiple Cities
                </div>
            </div>
    
           </div>
    <div className="row">
      <div className="col-lg-8"></div>
           <div className="col-lg-4 col-md-4 col-sm-12">
         
           <Link to='/Umra_main'><button className='btn btn-info  w-100  text-white '>VIEW DETAIL</button></Link>
    
           </div>  </div>
                </div>
               <div className='col-8'>
    
                 <hr />
               </div>
    
               <div className="row g-0">
    
     <div className="col-md-7 col-sm-12  mt-2 text-center text-md-start">
    <h5 className='fs-6'> INCLUSION </h5>
    <div className=' '>
    <span className=''> <AirplanemodeActiveIcon fontSize='large' color='disabled' className='border   ms-1'/> </span>
    <span className=''> <DirectionsBusIcon fontSize='large' color='disabled' className='border   ms-1'/> </span>
    <span className=''> <FaCcVisa  color='disabled' className='border fs-2 icolor  ms-1'/> </span>
    <span className=''> <BedroomParentIcon fontSize='large' color='disabled' className='border   ms-1'/> </span>
    <span className=''> <CalendarMonthIcon fontSize='large' color='disabled' className='border   ms-1'/> </span>
    <span className=''> <MosqueIcon fontSize='large' color='disabled' className='border   ms-1'/></span>
    </div>
    </div>  
    
    <div className="col col-sm-12 col-md-5 bbo">
    
    <Link to='/Umra_main'><button className='btn btn-info w-100 text-white'>40 Remaining Pax </button></Link>
    
    </div>
    
    
               </div>
          </div>
        </div>
      </div>
    </div>
    
    
        </div>
      )
    }

export default Umrah_card