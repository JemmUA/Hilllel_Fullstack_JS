import {createContext} from 'react'
import './App.css'
import CheckBox from "./components/CheckBox.jsx";
import ControlledNick from "./components/ControlledNick.jsx";
import UncontrolledNickEvent from "./components/UncontrolledNickEvent.jsx";
import HomeworkHeader from "./components/HomeworkHeader.jsx";
import Plate from "./components/Plate.jsx";
import User from "./components/User.jsx";

export const CheckNickRuleContext = createContext();

function App() {

  // RegEx змінної checkNickRule використовується в компонентах:
  //    ControlledNick
  //    UncontrolledNickEvent
  // та передається в них через контекст CheckNickRuleContext
  const checkNickRule = /^[a-z A-Z 0-9]{8,16}$/;

  return (
    <>
        <div>
            <HomeworkHeader/>
            <CheckNickRuleContext.Provider value={checkNickRule}>
              <Plate>
                  <ControlledNick/><br/>
                  <UncontrolledNickEvent/>
              </Plate>
            </CheckNickRuleContext.Provider>
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
