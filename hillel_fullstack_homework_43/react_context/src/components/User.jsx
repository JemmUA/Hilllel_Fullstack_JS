import "../css/user.css"
import {useEffect, useState} from "react";

function User () {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("10");

    const requestUsers = async () => {
    try {
        console.log("userId:", userId);
        // if (userId > 0 && userId <= 10) {
        // }
        // const requestResult = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const requestResult = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
        console.log(requestResult);
        setUsers(requestResult);
    } catch (error) {
        // console.error("Request error: ", error, "Try again.");
        throw new Error("Request error: ", error);
    } finally {
        console.log("Request finally.")
    }
  }

    useEffect( () => {
        requestUsers();
    }, [userId]);

    return (
        <div>
            {/*<input type="number" value={userId}*/}
            {/*       onChange={ev => setUserId(ev.target.value)}/>*/}

            <h2>Users:</h2>
            {users.map(user => (
                <div key={user.id}>
                    <div className="userInfo">
                        <div>Id: {user.id}</div>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Username: {user.username}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                    </div>
                </div>
            ))}


        </div>
    );

}

export default User;