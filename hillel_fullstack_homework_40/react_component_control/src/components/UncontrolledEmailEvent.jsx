import "../css/uncontrolledEmailEvent.css"
import {useRef, useState} from "react";

export default function UncontrolledEmailEvent() {
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    const handleClick = ev => {
        // console.log(ev.target.value);
        // console.log(inputRef.current.value);
        if (!inputRef.current.value.includes("@")) {
            setError("Wrong email. Absent symbol '@'.");
        } else {
            setError("");
        }
    }

    return (
        <>
            <label htmlFor="uncontrolledEmail">Uncontrolled Email: </label>
            <input id="uncontrolledEmail" name="email" type="text" ref={inputRef}/>
            <span className="error">{error}</span>
            <button id="uncontrolledEmailButton"  type="button" onClick={handleClick}>check</button>
        </>
    );
}