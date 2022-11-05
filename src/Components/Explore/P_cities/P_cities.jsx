import React from "react";
import Cities_card from "../Cities_card/Cities_card";
import Cities_Places from "../Cities_Places/Cities_Places";
import Button from '@mui/material/Button'

function P_cities() {
  return (
    <div>
      <div className="container my-4">
        <div className="row justify-content-center">
        <div className="col-12 col-md-6">
        <h4>MOST POPULAR CITIES IN SAUDIA ARABIA</h4>
          <p className="text-muted fw-light">
            DISCOVER BEST THINGS TO DO RESTAURANTS, SHOPPING, HOTELS, CAFES AND
            PLACES AROUND THE WORLD BY CATEGORIES
          </p>
        </div>
        </div>
      </div>
      
      <Cities_card
      title="MAKKAH"
      title2="MADINA"
      title3="RIYADH"
      imgsrc="makkah.png"
      imgsrc2="madina.png"
      imgsrc3="riyad.png"
     />
     <Cities_card
      title="JEDDAH"
      title2="AL KHOBAR"
      title3="DAMMAM"
      imgsrc="jeddah.png"
      imgsrc2="khobar.png"
      imgsrc3="dammam.png"
     />
     <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <Button variant="contained" fullWidth  sx={{background:"#02A3C1",padding:"10px",fontSize:"20px"}}>
            VIEW MORE CITIES
          </Button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default P_cities;
