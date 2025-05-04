import {createContext} from 'react';
import './App.css';
import CheckBox from './components/CheckBox.tsx';
import ControlledNick from './components/ControlledNick.tsx';
import UncontrolledNickEvent from './components/UncontrolledNickEvent.tsx';
import HomeworkHeader from './components/HomeworkHeader.tsx';
import Plate from './components/Plate.tsx';
import User, {storeValue} from './components/User.tsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';

export const CheckNickRuleContext = createContext();

function App() {

    const hwNumber = "ДЗ № 46.1";
    const hwName = "Рефакторинг існуючого Redux Toolkit проекту з використанням асинхронних дій";

    // RegEx змінної checkNickRule використовується в компонентах: ControlledNick, UncontrolledNickEvent
    // та передається в них через контекст CheckNickRuleContext
  const checkNickRule = /^[a-z A-Z 0-9]{8,16}$/;

  return (
    <>
        <div>
            <HomeworkHeader number={hwNumber} name={hwName}/>
            <CheckNickRuleContext.Provider value={checkNickRule}>
              <Plate>
                  <ControlledNick/><br/>
                  <UncontrolledNickEvent/>
              </Plate>
            </CheckNickRuleContext.Provider>
            <Plate>
                <div id="checkBoxContainer">
                    <Provider store={store}>
                        <CheckBox >Id</CheckBox>
                        {/*<CheckBox >Name</CheckBox>*/}
                        {/*<CheckBox >Username</CheckBox>*/}
                        {/*<CheckBox >Phone</CheckBox>*/}
                        {/*<CheckBox >Website</CheckBox>*/}
                    </Provider>

                </div>
            </Plate>
            <Plate>
              {/*<Provider store={storeValue}>*/}
                  <Provider store={store}>
                    <User/>
                  </Provider>
              {/*</Provider>*/}
            </Plate>
        </div>

    </>
  )
}

export default App;
