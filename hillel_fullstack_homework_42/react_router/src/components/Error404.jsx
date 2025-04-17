import React from 'react';
import MenuHeader from "./MenuHeader.jsx";

const Error404 = () => {
    document.title = "Error";
    return (
        <div>
            <div>
                {/*<MenuGeneral/>*/}
                <div className="error">Error 404</div>
                <div className="error">Page not found</div>
            </div>
        </div>
    );
};

export default Error404;