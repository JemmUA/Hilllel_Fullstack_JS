import React from 'react';
import MenuGeneral from "./MenuGeneral.jsx";

function Home(props) {
    document.title = "Home. React. Router.";
    return (
        <div>
            <MenuGeneral/>
            <div>Home page</div>
        </div>
    );
}

export default Home;