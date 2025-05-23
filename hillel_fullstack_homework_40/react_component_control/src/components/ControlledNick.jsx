import "../css/controlledNick.css"
import {useState} from "react";

export default function ControlledNick() {
    const [nick, setNick] = useState("");
    const [error, setError] = useState("");

    const handleChange = ev => {
        setNick(ev.target.value);
        const regName = /^[a-z A-Z 0-9]{8,16}$/;
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