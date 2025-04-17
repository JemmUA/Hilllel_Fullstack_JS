import React from 'react';
import MenuHeader from "./MenuHeader.jsx";
import {Outlet} from "react-router";

const AboutUs = () => {
    document.title = "About Us";
    return (
        <div>
            <div>
                {/*<MenuGeneral/>*/}
                <div>About us page</div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AboutUs;