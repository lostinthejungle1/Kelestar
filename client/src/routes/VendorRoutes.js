import React from "react";
import {Routes,Route} from 'react-router-dom';
import RegisterVendor from '../pages/Register/vendor/RegisterVendor/RegisterVendor';
import RegisterMenu from '../pages/Register/vendor/RegisterMenu/RegisterMenu';
import CreateDish from '../pages/Register/vendor/CreateDish/CreateDish';
import DashBoard from "../pages/Vendor/DashBoard/DashBoard";
import HomeMenu from "../pages/Vendor/HomeMenu/HomeMenu";
import Me from "../pages/Vendor/Me/Me";

const VendorRoutes = ()=>{
    return (
        <Routes>
            <Route path='/register-vendor' element={<RegisterVendor/>} />
            <Route path='/register-menu' element={<RegisterMenu/>} />
            <Route path='/create-dish' element={<CreateDish/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
            <Route path='/homemenu' element={<HomeMenu/>} />
            <Route path='/me' element={<Me/>} />
        </Routes>
    )
}

export default VendorRoutes;