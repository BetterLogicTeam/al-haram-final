import React from 'react'
import "./Vise_header.css"
import {useNavigate } from "react-router-dom"

function Vise_header() {

    let navigate = useNavigate()
  return (
    <div className=''>
        <div className="container-fluid vise_header">
        <div className="vise_bg">
            <h5 className='text-white vise_heading'>Vise information from india</h5>

        </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 p-0">
                    <div className='d-flex  vise_info_main' onClick={() => navigate('/')}>
                        <input type="radio" />
                        <button className='vise_btn'  >
                            Vise & note fees
                        </button>

                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className='d-flex  vise_info_main' onClick={() => navigate('/diploamatic')}>
                        <input type="radio" />
                        <button className='vise_btn'>
    Diplomatic Representation
                        </button>

                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className='d-flex   vise_info_main' onClick={() => navigate('/form')}>
                        <input type="radio" />
                        <button className='vise_btn'>
                            Download Vise Form
                        </button>

                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Vise_header
