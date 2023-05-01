import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Shared/Footer';
import DragonNavbar from '../Pages/Shared/DragonNavbar/DragonNavbar';

const Loginlayout = () => {
    return (
        <div>
            <DragonNavbar></DragonNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Loginlayout;