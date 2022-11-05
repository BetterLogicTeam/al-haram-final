import React from 'react'
import {BsShieldFillCheck} from "react-icons/bs"
import {BiHappy} from "react-icons/bi"
import {TbBrandBooking} from "react-icons/tb"
import {TbPackage} from "react-icons/tb"
import "./Al_haram_footer.css"
import she from "../Assets/she.png"
import smi from "../Assets/smi.png"
import smm from "../Assets/smm.png"
import box from "../Assets/box.png"

function Al_haram_footer() {
  return (
    <div className='al_haam_footer'>
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-2 mt-3">
                       <div>
                    {/* <BsShieldFillCheck className='fs-2 text-white'></BsShieldFillCheck> */}
                    <img src={she} className='w-40' alt="" />
                      <p className='footer_icons_para mt-3'>1500+ <br />verified agents</p>
                    </div>
                </div>
                <div className="col-md-2 mt-3">
                       <div>
                    {/* <BiHappy className='fs-2 text-white'></BiHappy> */}
                    <img src={smi} className='w-40' alt="" />
                      <p className='footer_icons_para mt-3'>1 Lakh+ <br />verified agents</p>
                    </div>
                </div>
                <div className="col-md-2 mt-3">
                       <div>
                    {/* <TbBrandBooking className='fs-2 text-white'></TbBrandBooking> */}
                    <img src={she} className='w-40' alt="" />
                      <p className='footer_icons_para mt-3'>2 Lakh+ <br />Booking</p>
                    </div>
                </div>
                <div className="col-md-2 mt-3">
                       <div>
                    {/* <TbPackage className='fs-2 text-white'></TbPackage> */}
                    <img src={box} alt="" className='w-40' />
                      <p className='footer_icons_para mt-3'>1k + <br />Packages</p>
                    </div>
                </div>
            </div>
          </div>
      
    </div>
  )
}

export default Al_haram_footer
