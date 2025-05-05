import "../css/user.css"
import {useEffect, useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {decrementAsync, incrementAsync, minusId, plusId, setId} from "../redux/counterIdSlice.ts";


const infoAboutUserIdInput = "Ten users are available. Values 1 - 10 present user by Id, rest values - all users";

function User () {
    const checkBoxValue: boolean = useSelector( (state) => state.checkBox.value); // state - глобальний стан
    // console.log("checkBoxValue in User:", checkBoxValue);
    const counterIdValue: number = useSelector( (state) => state.counterId.value); // state - глобальний стан
    console.log("counterIdValue in User:", counterIdValue);
    const dispatch = useDispatch();

  const handlePlus = () => {
      setUserId(counterIdValue);
      dispatch(plusId());
  }

  const handleMinus = () => {
      setUserId(counterIdValue);
      dispatch(minusId());
  }

  const handleSagaPlus = () => {
      dispatch(incrementAsync());
  }

  const handleSagaMinus = () => {
      dispatch(decrementAsync());
  }



  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const requestUsers = async () => {
  try {
      const requestResult = await fetch(`https://jsonplaceholder.typicode.com/users/${counterIdValue > 0 && counterIdValue <= 10 ? counterIdValue : ""}`)
      .then(response => response.json());
      setUsers(requestResult);
  } catch (error) {
      // console.error("Request error: ", error, "Try again.");
      throw new Error("Request error: ", error);
  } finally {
      // console.log("Request finally.")
    }
  }

  useEffect( () => {
      requestUsers();
  }, [counterIdValue]);



  if (Array.isArray(users)) {

      return (
        <>
        {/*// <Provider store={storeValue}>*/}
          <p>{infoAboutUserIdInput}</p>
          {/*<input type="number" value={userId} onChange={ev => setUserId(ev.target.value)}/>*/}
          {/*<input type="number" value={userId} onChange={handleChanging}/>*/}
            <div>
                <div className="id__plus-minus">

                    User Id({counterIdValue}) +/-:
                </div>
                <button className="counterIdButton" onClick={handlePlus}>plus</button>
                <button className="counterIdButton" onClick={handleMinus}>minus</button>
            </div>
            <div>
                <button className="counterIdButtonSaga" onClick={handleSagaPlus}>Saga plus</button>
                <button className="counterIdButtonSaga" onClick={handleSagaMinus}>Saga minus</button>
            </div>
            <hr className="split__line" />
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
        </>
    );} else {
      return (
        <>
          <p>{infoAboutUserIdInput}</p>
            <div>
                <div className="id__plus-minus">
                    User Id({counterIdValue}) +/-:
                </div>
              <button className="counterIdButton" onClick={handlePlus}>plus</button>
              <button className="counterIdButton" onClick={handleMinus}>minus</button>
            </div>
            <div>
                <button className="counterIdButtonSaga" onClick={handleSagaPlus}>Saga plus</button>
                <button className="counterIdButtonSaga" onClick={handleSagaMinus}>Saga minus</button>
            </div>
            <hr className="split__line" />
            <h2>User #{counterIdValue}</h2>
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
        </>
    );
    }

}

export default User;