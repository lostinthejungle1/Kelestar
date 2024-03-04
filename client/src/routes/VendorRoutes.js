import React from "react";
import {Routes,Route} from 'react-router-dom';
import RegisterVendor from '../pages/Register/vendor/RegisterVendor/RegisterVendor';
import RegisterMenu from '../pages/Register/vendor/RegisterMenu/RegisterMenu';
import CreateDish from '../pages/Register/vendor/CreateDish/CreateDish';
import DashBoard from "../pages/Vendor/DashBoard/DashBoard";

const VendorRoutes = ()=>{
    return (
        <Routes>
            <Route path='/register-vendor' element={<RegisterVendor/>} />
            <Route path='/register-menu' element={<RegisterMenu/>} />
            <Route path='/create-dish' element={<CreateDish/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
        </Routes>
    )
}

export default VendorRoutes;