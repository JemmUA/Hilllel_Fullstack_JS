import { useState } from 'react'
import './App.css'
import CheckBox from "./components/CheckBox.jsx";
import ControlledEmail from "./components/ControlledEmail.jsx";
import UncontrolledEmailEvent from "./components/UncontrolledEmailEvent.jsx";

function App() {
  const [isChecked, setIsChecked] = useState(0)

  return (
    <>
        <div>
            <ControlledEmail></ControlledEmail><br/>
            <UncontrolledEmailEvent></UncontrolledEmailEvent>
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

export default App
