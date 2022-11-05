import React from 'react'
import Cities_card from '../Cities_card/Cities_card'

export default function Mvisitedp() {
  return (
    <div style={{background:" #E1FAFF"}}>
      <div className="container">
        <div className="row">
            <div className="col-12 mt-3">
            <h4>MOST VISITED PLACES BY TRAVELRS </h4>
            </div>
           
        </div>
      </div>
     <div className='py-5' >
     <Cities_card
      title="MAKKAH"
      title2="MADINA"
      title3="RIYADH"
      imgsrc="makkah.png"
      imgsrc2="madina.png"
      imgsrc3="riyad.png"
     />
     </div>
    </div>
  )
}
