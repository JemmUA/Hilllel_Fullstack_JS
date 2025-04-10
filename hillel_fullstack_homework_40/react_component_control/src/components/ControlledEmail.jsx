import "../css/controlledEmail.css"
import {useState} from "react";

export default function ControlledEmail() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = ev => {
        // console.log(ev.target.value);
        setEmail(ev.target.value);
        if (!ev.target.value.includes("@")) {
            setError("Wrong email. Absent symbol '@'.");
        } else {
            setError("");
        }
    }

    return (
        <>
            <label htmlFor="controlledEmail">Controlled Email: </label>
            <input id="controlledEmail" name="email" type="text" value={email} onChange={handleChange} />
            <div className="error">{error}</div>
        </>
    );
}