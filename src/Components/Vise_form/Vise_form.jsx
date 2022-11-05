import React from 'react'
import "./Vise_form.css"
import {BiDownload} from "react-icons/bi"

function Vise_form() {
  return (
    <div className='vise_form_main_bg'>
        <div className="container">
        <h1 className='vise_form_heading'>Umrah Vise Form</h1>

            <div className="row mt-4">
                <div className="col-md-6 mt-3">
                    <div className="card vise_form_card">
                        <div className="card-body">
                            <div>
                                <BiDownload className='fs-2 mb-4' ></BiDownload>
                                <h4 className='vise_form_sub_heading'>umrah vise form</h4>
                            </div>


                        </div>
                    </div>
                
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card vise_form_card">
                        <div className="card-body">
                            <div>
                                <BiDownload className='fs-2 mb-4' ></BiDownload>
                                <h4 className='vise_form_sub_heading'>for mumbai jurisdiction</h4>
                            </div>


                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="container mt-5">
        <h1 className='vise_form_heading'>Hajj Vise Form</h1>

            <div className="row mt-4">
                <div className="col-md-6 mt-3">
                    <div className="card vise_form_card">
                        <div className="card-body">
                            <div>
                                <BiDownload className='fs-2 mb-4' ></BiDownload>
                                <h4 className='vise_form_sub_heading'>umrah vise form</h4>
                            </div>


                        </div>
                    </div>
                
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card vise_form_card">
                        <div className="card-body">
                            <div>
                                <BiDownload className='fs-2 mb-4' ></BiDownload>
                                <h4 className='vise_form_sub_heading'>for delhi jurisdiction</h4>
                            </div>


                        </div>
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Vise_form
