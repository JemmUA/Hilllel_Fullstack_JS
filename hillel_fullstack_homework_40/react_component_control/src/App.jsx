import { useState } from 'react'
import './App.css'
import CheckBox from "./components/CheckBox.jsx";
import ControlledNick from "./components/ControlledNick.jsx";
import UncontrolledNickEvent from "./components/UncontrolledNickEvent.jsx";
import HomeworkHeader from "./components/HomeworkHeader.jsx";
import Plate from "./components/Plate.jsx";

function App() {
  const [isChecked, setIsChecked] = useState(0)
  console.log(isChecked);

  return (
    <>
        <div>
            <Plate>
                <HomeworkHeader/>
            </Plate>
            <ControlledNick/><br/>
            <UncontrolledNickEvent/>
            <div id="checkBoxContainer">
                <CheckBox >AAA</CheckBox>
                <CheckBox >BBB</CheckBox>
                <CheckBox >CCC</CheckBox>
                <CheckBox >DDD</CheckBox>
                <CheckBox >EEE</CheckBox>
            </div>
        </div>

    </>
  )
}

export default App;
