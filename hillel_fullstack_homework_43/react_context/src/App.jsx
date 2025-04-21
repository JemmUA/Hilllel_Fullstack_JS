import { useState } from 'react'
import './App.css'
import CheckBox from "./components/CheckBox.jsx";
import ControlledNick from "./components/ControlledNick.jsx";
import UncontrolledNickEvent from "./components/UncontrolledNickEvent.jsx";
import HomeworkHeader from "./components/HomeworkHeader.jsx";
import Plate from "./components/Plate.jsx";
import User from "./components/User.jsx";

function App() {
  const [isChecked, setIsChecked] = useState(0)
  // console.log(isChecked);

  return (
    <>
        <div>
            <HomeworkHeader/>
            <Plate>
                <ControlledNick/><br/>
                <UncontrolledNickEvent/>
            </Plate>
            <div id="checkBoxContainer">
                <CheckBox >AAA</CheckBox>
                <CheckBox >BBB</CheckBox>
                <CheckBox >CCC</CheckBox>
                <CheckBox >DDD</CheckBox>
                <CheckBox >EEE</CheckBox>
            </div>
            <Plate>
                <User></User>
            </Plate>
        </div>

    </>
  )
}

export default App;
