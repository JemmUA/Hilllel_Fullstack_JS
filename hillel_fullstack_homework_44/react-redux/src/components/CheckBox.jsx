import {useState} from "react";

export default function CheckBox (props) {
    // console.log("props", props);
    const [checkState, setCheckState] = useState(true);

    const handleCheckState = () => {
        setCheckState(!checkState);
        console.log(`checkState ${props.children}: `, checkState);
        // console.log("ev.target.value: ", ev.target.value);
        // console.log("!ev.target.value: ", !(ev.target.value));
        // console.log("type of !ev.target.value: ", typeof ev.target.value);
    };
    return (
        <>
            <input name={props.name} type="checkbox" value={checkState} onChange={handleCheckState} />
            <label>{props.children}</label>
        </>
    )
}