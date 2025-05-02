// import {RootState} from "../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {invertValue} from "../redux/checkBoxSlice.ts";

export default function CheckBox (props) {

    const checkBoxValue = useSelector( (state) => state.checkBox.value); // state - глобальний стан
    const dispatch = useDispatch();
    // console.log("checkBoxValue:", checkBoxValue);

    const handleCheckValue = () => {
      dispatch(invertValue());
    }

    return (
        <>
            {/*<div>{checkBoxValue.toString()}</div>*/}
            <input type="checkbox" onChange={handleCheckValue}/>
            <label>{props.children}</label>
        </>
    )
}

