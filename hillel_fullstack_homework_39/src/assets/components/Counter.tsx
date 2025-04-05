import { useState } from "react";
import CounterButton from './CounterButton.tsx';

export default function Counter() {
    const [countBtn, setCountBtn] = useState(1);
    const addMore = ():void => {
        setCountBtn(countBtn + 1);
    }
    return (
        <div>
            {/*<div>{countBtn}</div>*/}
            <CounterButton count={countBtn} increment={addMore}>I'm a counterButton</CounterButton>
            {/*<CounterButton>I'm second counterButton</CounterButton>*/}
        </div>
    );
}