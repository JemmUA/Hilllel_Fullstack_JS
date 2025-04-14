import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import User from "./components/User.jsx";

function App() {
    const [userId, setUserId] = useState(1)
    // console.log("UserId #", userId);
    let responseAxios;

    useEffect((userId) => {
        responseAxios = getUser(userId);
        console.log("responseAxios:", responseAxios);
    }, [userId]);

    console.log(responseAxios);

    async function getUser(userId) {
        let response ;
        try {
            const response = await axios.get('/user?ID={userId}');
            // response = await axios.get('/user?ID=12345');
            // console.log("Response:", response);
        } catch (error) {
            console.error("Something went wrong. Panic is ON!!!", error);
            //         // throw new Error (error);
        }
        console.log("Response:", response);
        return response;
    }

    // axios.get('/user?ID=1')
    //     .then(async function (response) {
    //         // handle success
    //         // console.log("Response.toString:", response.toString());
    //         // console.log("Response.data:", response.data);
    //         // console.log("Response.request:", response.request);
    //     })
    //     .catch(function (error) {
    //         console.error("Error:", error);
    //         // throw new Error (error);
    //     })
    //     .finally(function () {
    //         console.log("Finally.")
    //         // always executed
    //     });
    // console.log("responseAxios", responseAxios);
  return (
    <>
        <h1>ДЗ 41.1.</h1>
        <h2>Розробка з використанням хука useEffect і Axios.</h2>
        {/*<div>{responseAxios}</div>*/}
        <User/>
    </>
  )
}

export default App
