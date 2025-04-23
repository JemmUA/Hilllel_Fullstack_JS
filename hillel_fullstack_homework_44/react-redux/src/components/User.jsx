import "../css/user.css"
import {useEffect, useState} from "react";

function User () {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(0);
    const infoAboutUserIdInput = "Ten users are available. Values 1 - 10 present user by Id, rest values - all users";
    const requestUsers = async () => {
    try {
        const requestResult = await fetch(`https://jsonplaceholder.typicode.com/users/${userId > 0 && userId <= 10 ? userId : ""}`)
        .then(response => response.json());
        // console.log("requestResult: ", requestResult);
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

    if (Array.isArray(users)) {

      return (
        <div>
          <p>{infoAboutUserIdInput}</p>
          <input type="number" value={userId} onChange={ev => setUserId(ev.target.value)}/>
            <h2>All users</h2>

            {users.map(user => (
                <div key={user.id}>
                    <div className="userInfo">
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Username: {user.username}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                    </div>
                </div>
            ))}
        </div>
    );} else {
      return (
        <div>
          <p>{infoAboutUserIdInput}</p>
          <input type="number" value={userId} onChange={ev => setUserId(ev.target.value)}/>
          <h2>User #{userId}</h2>
          <div key={users.id}>
            <div className="userInfo">
                <div>Id: {users.id}</div>
                <div>Name: {users.name}</div>
                <div>Email: {users.email}</div>
                <div>Username: {users.username}</div>
                <div>Phone: {users.phone}</div>
                <div>Website: {users.website}</div>
            </div>
          </div>
        </div>

    );
    }

}

export default User;