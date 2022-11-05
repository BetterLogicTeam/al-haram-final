import logo from './logo.svg';
import './App.css';

import Vise_header from './Components/Vise_header/Vise_header';
import Vise_form from './Components/Vise_form/Vise_form';
import Diplomatic from './Components/Diplomatic_vise/Diplomatic';
import Vise_information from './Components/Vise_information/Vise_information';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Al_haram_header from './Components/Al_haram_header/Al_haram_header';
import Al_haram_link_header from './Components/Al_haram_link_header/Al_haram_link_header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home_front from './Components/Home_front/Home_front';
import Al_haram_footer from './Components/Al_haram_header/Al_haram_footer';
import Al_haram_offers from './Components/Al_haram_offers/Al_haram_offers';
import Umrah_deals from './Components/Umrah_deals/Umrah_deals';
import Explore_ksg from './Components/Explore_ksg/Explore_ksg';
import Al_haram_main_footer from './Components/Al_haram_main_footer/Al_haram_main_footer';
import Flight_result from './Components/Flight_result/Flight_result';

import Main_home from './Components/Main_home/Main_home';
import Upage_two_main from './Components/Upage_two_main';
import Hajj_two_main from './Components/Hajj_two_main';
import Umra_main from './Components/Umra_main';
import Main_booking from './Components/Main_booking';
import Main_Browse from './Components/Main_Browse';
import Explore from "./Components/Explore/Explore";
import Explore_resturant from "./Components/Explore_resturant/Explore_resturant";
// import Explore from "./Components/Explore/Explore";
import Explore_resturant_detail from "./Components/Explore_resturant_detail/Explore_resturant_detail";
import Explore_Malls from "./Components/Explore_Malls/Explore_Malls";
import Explore_Monuments from "./Components/Explore_Monuments/Explore_Monuments";
import Explore_Local from "./Components/Explore_Local/Explore_Local";
import Explore_Mosques from "./Components/Explore_Mosques/Explore_Mosques";
import Explore_Malls_d from "./Components/Explore_Malls_d/Explore_Malls_d";
import FlightsScd from './Components/Flights_Scd';
import SelectSeatSleeper from './Components/SelectSeatSleeper';
import SelectSeatSeaterOnly from './Components/SelectSeatSeaterOnly';
import SelectSeatSeaterAndBerth from './Components/SelectSeatSeaterAndBerth';




function App() {
  return (
    <div className="App">
  
        <Router>
          <Al_haram_header/>
          <Al_haram_link_header/>
          {/* {/* <Home_front/> */}
          {/* <Al_haram_footer/> */} 
          {/* <Vise_header/> */}
        <Routes>
        <Route exact  path="/" element={<Main_home />} />
        <Route exact  path="/Umrah_package" element={<Upage_two_main/>} />
        <Route exact  path="/hajj_packages" element={<Hajj_two_main/>} />
        <Route exact  path="/Umra_main" element={<Umra_main/>} />
        <Route exact  path="/Main_booking" element={<Main_booking/>} />
        <Route exact  path="/catering" element={<Main_Browse/>} />
        <Route exact  path="/explore" element={<Explore/>} />
        <Route path="/Explore_resturant" element={<Explore_resturant />} />
        <Route path="/Explore_resturant_detail" element={<Explore_resturant_detail />}/>
        <Route path="/Explore_Malls" element={<Explore_Malls/>}/>
        <Route path="/Explore_Malls_d" element={<Explore_Malls_d/>}/>
        <Route path="/Explore_Monuments" element={<Explore_Monuments/>}/>
        <Route path="/Explore_Local" element={<Explore_Local/>}/>
        <Route path="/Explore_Mosques" element={<Explore_Mosques/>}/>
        <Route path="/cabs" element={<FlightsScd/>}/>
        <Route path="SelectSeatSleeper" element={<SelectSeatSleeper />} />
        <Route path="SelectSeatSeaterAndBerth" element={<SelectSeatSeaterAndBerth />} />
        <Route path="SelectSeatSeaterOnly" element={<SelectSeatSeaterOnly />} />
        <Route path="flight" element={<Flight_result />} />
        

  
        
        {/* <Route exact  path="/diploamatic" element={<Diplomatic />} />
        <Route exact  path="/form" element={<Vise_form />} /> */}
        </Routes>
        {/* <Al_haram_offers/>
        <Umrah_deals/>
        
        <Explore_ksg/> */}
       
        {/* <Testimonials /> */}
        {/* <Travel/> */}
         <Al_haram_main_footer/>
         {/* <Flight_link/> */}
         {/* <Hotels_link/> */}
         {/* <Buses_link/> */}
        
        </Router>
     
    </div>
  );
}

export default App;
