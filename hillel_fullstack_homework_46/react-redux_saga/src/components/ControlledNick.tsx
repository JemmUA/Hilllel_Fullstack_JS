import "../css/controlledNick.css"
import {useState} from "react";
import React, {useContext} from 'react';
import {CheckNickRuleContext} from "../App.tsx";


export default function ControlledNick() {
    const [nick, setNick] = useState("");
    const [error, setError] = useState("");
    const regName = useContext(CheckNickRuleContext);

    const handleChange = ev => {
        setNick(ev.target.value);
        if (!regName.test(ev.target.value)) {
            setError("Only Latin (8 - 16) letters and numbers are allowed for Nick");
        } else {
            setError("");
        }
    }

    return (
        <>
            <label htmlFor="controlledNick">Controlled Nick: </label>
            <input id="controlledNick" name="nick" type="text" value={nick} onChange={handleChange} />
            <div className="error">{error}</div>
        </>
    );
}