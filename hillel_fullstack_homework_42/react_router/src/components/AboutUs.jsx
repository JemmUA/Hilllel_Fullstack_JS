import React from 'react';
import MenuGeneral from "./MenuGeneral.jsx";

const AboutUs = () => {
    document.title = "About Us";
    return (
        <div>
            <div>
                <MenuGeneral/>
                <div>About us page</div>
            </div>
        </div>
    );
};

export default AboutUs;