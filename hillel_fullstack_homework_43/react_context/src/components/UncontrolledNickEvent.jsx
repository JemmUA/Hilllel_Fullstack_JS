import "../css/uncontrolledNickEvent.css"
import {useRef, useState} from "react";

export default function UncontrolledNickEvent() {
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    const handleClick = ev => {
        const regName = /^[a-z A-Z 0-9]{8,16}$/;
        if (!regName.test(inputRef.current.value)) {
            setError("Only Latin (8 - 16) letters and numbers are allowed for Nick");
        } else {
            setError("");
        }
    }

    return (
        <>
            <label htmlFor="uncontrolledNick">Uncontrolled Nick: </label>
            <input id="uncontrolledNick" name="nick" type="text" ref={inputRef}/>
            <button id="uncontrolledNickButton" type="button" onClick={handleClick}>check</button>
            <div className="error">{error}</div>
        </>
    );
}