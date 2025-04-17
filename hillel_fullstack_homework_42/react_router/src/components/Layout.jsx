import {Outlet} from "react-router";
import MenuHeader from "./MenuHeader.jsx";
import MenuFooter from "./MenuFooter.jsx";

const Layout = () => {
    return (
        <div className="container__main">
            <MenuHeader/>
            <Outlet/>
            <MenuFooter/>
        </div>
    );
};

export default Layout;