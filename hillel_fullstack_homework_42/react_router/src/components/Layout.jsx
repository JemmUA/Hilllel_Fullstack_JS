import {Outlet} from "react-router";
import MenuHeader from "./MenuHeader.jsx";
import MenuFooter from "./MenuFooter.jsx";
import HomeWorkTitle from "./HomeWorkTitle.jsx";

const Layout = () => {
    return (
        <div className="container__main">
            <HomeWorkTitle/>
            <MenuHeader/>
            <Outlet/>
            <MenuFooter/>
        </div>
    );
};

export default Layout;