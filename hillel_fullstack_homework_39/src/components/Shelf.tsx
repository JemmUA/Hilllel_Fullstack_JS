import { useState } from "react";
import Loaf from './Loaf.tsx';
import Towel from './Towel.tsx';

enum LoafState {
    SELLING = "Продається",
    SOLD = "Продано"
}

export default function Shelf() {
    const [stateLoaf, setStateLoaf] = useState(LoafState.SELLING);
    const changeLoafState = ():void => {
        setStateLoaf(LoafState.SOLD);
    }
    return (
        <>
            <Loaf state={stateLoaf} changeState={changeLoafState} text={"запашний"}>I'm a Loaf</Loaf>
            {/*<Loaf state={stateLoaf} changeState={changeLoafState} text={"гарний"}>I'm a Loaf</Loaf>*/}
            {/*<Loaf state={stateLoaf} changeState={changeLoafState} text={"смачнючий"}>I'm a Loaf</Loaf>*/}
            <Towel name={"Рушничок"}></Towel>
        </>
    );
}