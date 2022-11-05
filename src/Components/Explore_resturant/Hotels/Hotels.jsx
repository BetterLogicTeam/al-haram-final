import React from 'react'
import Rating from '@mui/material/Rating';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Hotelcard from '../Hotelcard/Hotelcard'
import { Link } from '@mui/material';

function Hotels(props) {
  return (
    <div className='container-fluid  my-4'>
    <div className="row ps-4 justify-content-around">
        <div className="col-12 col-md-3  shadow-lg">
        <div className="row ">
            <div className="col-12 " style={{background:"#02A3C1"}}>
            <div className="side-bar text-white py-2 " >
        <div className="heading">
            <h4>{props.title}</h4>
        </div>
      </div>
            </div>

        <div className="col-12 mt-2">
            <h5 className='text-muted' style={{fontSize:"18px"}}>LUXURY GRAND HOTEL <sub>MAKKAH</sub></h5>
            <p className='text-start mb-0'>
            <Rating name="read-only" defaultValue={4} precision={4} readOnly />
            </p>
        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2">
            <h5 className='text-muted' style={{fontSize:"18px"}}>AL HAYAT  HOTEL <sub>MAKKAH</sub></h5>
            <p className='text-start mb-0' > 
            <Rating name="read-only" defaultValue={3} precision={3} readOnly />
            </p>
        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2">
            <h5 className='text-muted' style={{fontSize:"18px"}}>AL JABBAR GRAND HOTEL <sub>MAKKAH</sub></h5>
            <p className='text-start mb-0'>
            <Rating name="read-only" defaultValue={2} precision={2} readOnly />
            </p>
        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2" >
            <h5 className='text-muted' style={{fontSize:"18px"}}>LUXURY GRAND HOTEL <sub>MAKKAH</sub></h5>
            <p className='text-start mb-0'>
            <Rating name="read-only" defaultValue={4} precision={4} readOnly />
            </p>
        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2">
            <h5 className='text-muted' style={{fontSize:"18px"}}>LUXURY GOLD HOTEL <sub>MAKKAH</sub></h5>
            <p className='text-start mb-0'>
            <Rating name="read-only" defaultValue={4} precision={4} readOnly />
            </p>
        </div>
        <div className="col-10">
<hr /> </div>
        </div>
        <div className="row mt-4">
            <div className="col-12" style={{background:"#02A3C1"}}>
            <div className="side-bar text-white py-2 " >
        <div className="heading">
            <h4><span><img src="catagories.png" alt="" /></span> Categories</h4>
        </div>
      </div>
            </div>

        <div className="col-12 mt-2" style={{fontSize:"18px"}}>
            <h5  className='text-muted text-start'> <RadioButtonCheckedIcon/> TURKISH FOOD</h5>
            
        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2" style={{fontSize:"18px"}}>
        <h5  className='text-muted text-start'> <RadioButtonCheckedIcon/> PAKISTANI FOOD</h5>

        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2" style={{fontSize:"18px"}}>
        <h5  className='text-muted text-start'> <RadioButtonCheckedIcon/> INDIAN FOOD</h5>

        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2" style={{fontSize:"18px"}}>
        <h5  className='text-muted text-start'> <RadioButtonCheckedIcon/> CHINESE FOOD</h5>

        </div>
        <div className="col-10">
<hr /> </div>
        <div className="col-12 mt-2" style={{fontSize:"18px"}}>
        <h5  className='text-muted text-start'> <RadioButtonCheckedIcon/> ARABIC FOOD</h5>

        </div>
        <div className="col-10">
<hr /> </div>
        </div>
       
        </div>
        <div className="col-12 col-md-9">
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <Hotelcard title="Al Khobar Resturant"
      imgsrc="ALKhobar.png"
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      
       
        </div>
    </div>
      
    </div>
  )
}

export default Hotels
