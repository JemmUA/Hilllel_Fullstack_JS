import "../css/user.css"
import {useEffect, useState} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";


const infoAboutUserIdInput = "Ten users are available. Values 1 - 10 present user by Id, rest values - all users";

// // Тип екшна
const SETVALUE = "SETVALUE";

// // Створення екшна
const setValue = (value)  => ({
  type: SETVALUE,
  payload: value
});

// // Reducer
const setValueReducer = (state = 0, action) => {
  console.log("State:", state, "Action: ", action);
  // switch (action.type) {
  //     case SETVALUE:
  //     return action.payload;
  //   default:
  //     return state;
  // }
  if (action.type === SETVALUE) {
      // console.log("action.payload:", action.payload);
    return action.payload;
  } else {
    return state;
  }
}


// // Store
export const storeValue = configureStore({
  reducer: { //необхідний ключ reducer
    setter: setValueReducer
  }
})


function User () {
    const checkBoxValue = useSelector( (state) => state.checkBox.value); // state - глобальний стан
    console.log("checkBoxValue in User:", checkBoxValue);
    const dispatch = useDispatch();

  const handleChanging = (ev) => {
    setUserId(ev.target.value);
    console.log("Ev:", ev.target.value);
    // console.log("dispatch!!!");
    dispatch(setValue(ev.target.value));
  }


  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const requestUsers = async () => {
  try {
      const requestResult = await fetch(`https://jsonplaceholder.typicode.com/users/${userId > 0 && userId <= 10 ? userId : ""}`)
      .then(response => response.json());
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
        <>
        {/*// <Provider store={storeValue}>*/}
          <p>{infoAboutUserIdInput}</p>
          {/*<input type="number" value={userId} onChange={ev => setUserId(ev.target.value)}/>*/}
          <input type="number" value={userId} onChange={handleChanging}/>
          <h2>All users</h2>

            {users.map(user => (
                <div key={user.id}>
                    <div className="userInfo">
                        {checkBoxValue ? <div>Id: {user.id}</div> : null}
                        {/*<div>Id: {user.id}</div>*/}
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Username: {user.username}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                    </div>
                </div>
            ))}

            {/*{users.map(user => (*/}
            {/*    <div key={user.id}>*/}
            {/*        <div className="userInfo">*/}
            {/*            <div>Id: {user.id}</div>*/}
            {/*            <div>Name: {user.name}</div>*/}
            {/*            <div>Email: {user.email}</div>*/}
            {/*            <div>Username: {user.username}</div>*/}
            {/*            <div>Phone: {user.phone}</div>*/}
            {/*            <div>Website: {user.website}</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*))}*/}
        {/*</Provider>*/}
        </>
    );} else {
      return (
        <>
        {/*// <Provider store={storeValue}>*/}
          <p>{infoAboutUserIdInput}</p>
          {/*<input type="number" value={userId} onChange={ev => setUserId(ev.target.value)}/>*/}
          <input type="number" value={userId} onChange={handleChanging}/>
          <h2>User #{userId}</h2>
          <div key={users.id}>
            <div className="userInfo">
                {checkBoxValue ? <div>Id: {users.id}</div> : null}
                {/*<div>Id: {users.id}</div>*/}
                <div>Name: {users.name}</div>
                <div>Email: {users.email}</div>
                <div>Username: {users.username}</div>
                <div>Phone: {users.phone}</div>
                <div>Website: {users.website}</div>
            </div>
          </div>
        {/*// </Provider>*/}
        </>
    );
    }

}

export default User;