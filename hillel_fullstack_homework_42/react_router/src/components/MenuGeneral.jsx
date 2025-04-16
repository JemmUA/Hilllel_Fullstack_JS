import React from 'react';
import {Link, NavLink} from "react-router";

const MenuGeneral = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/catalog'}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to={'/aboutus'}>About us</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuGeneral;