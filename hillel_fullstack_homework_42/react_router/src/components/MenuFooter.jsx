import React from 'react';
import {Link, NavLink} from "react-router";

const MenuFooter = () => {
    return (
        <div>
            <ul className="menu--footer">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/catalog'}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to={'/contacts'}>Contacts</NavLink>
                </li>
                <li>
                    <NavLink to={'/aboutus'} end>About us</NavLink>
                </li>
                <li>
                    <NavLink to={'/aboutus/partners'}>Partners</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuFooter;