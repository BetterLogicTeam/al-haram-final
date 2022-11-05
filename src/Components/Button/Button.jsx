import React from 'react'
import Divider from '@mui/material/Divider';
function Button() {
    return (
        <div className='container mt-5 mb-3'>
            <div class="card ">
                <div class="card-header  ucard p-3 text-center fs-3 ">
                    <h3 className='text-white'>Package Snapshot</h3>
                </div>
                <div className="row text-center p-4">
                    <div className="col-lg-3 col-sm-6 border-end border-dark">Departure city<br/>
                        Multiple cities</div>
                    <div className="col-lg-3 col-sm-6 border-end border-dark">Departure Date<br/>
                        21 oct 2022</div>
                    <div className="col-lg-3 col-sm-6 border-end border-dark">Arrival date<br/>
                        21 oct 2022</div>
                    <div className="col-lg-3 col-sm-6">Remaining pax<br/>
                        40 members</div>
                </div>

            </div>
        </div>
    )
}

export default Button
