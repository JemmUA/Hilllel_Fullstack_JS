import {useState} from "react";

export default function CheckBox (props) {
    // console.log("props", props);
    const [checkState, setCheckState] = useState(true);

    const handleCheckState = (ev) => {
        setCheckState(!checkState);
        console.log(`checkState ${props.children}: `, checkState);
        // console.log("ev.target.value: ", ev.target.value);
        // console.log("ev.target: ", ev.target);
        // console.log("!ev.target.value: ", !(ev.target.value));
        // console.log("type of !ev.target.value: ", typeof ev.target.value);
    };
    return (
        <>
            {/*<input name="checkbox" type="checkbox" value={checkState} onChange={handleCheckState} />*/}
            <input name={props.name} type="checkbox" value={checkState} onChange={handleCheckState} />
            <label>{props.children}</label>
        </>
    )
}