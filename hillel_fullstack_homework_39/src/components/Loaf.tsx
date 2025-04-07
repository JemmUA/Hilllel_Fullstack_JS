// import '../../App.css'
import {FC} from 'react';

interface loafProps {
    state: string,
    changeState: () => void,
    text: string
}

const  Loaf: FC<loafProps> = (props) => {
    // const {state, text, changeState} = props;
    // console.log("State:", state, "Text:", text, "changeState:", changeState);
    return (
        <button onClick={props.changeState}>Батончик {props.text} {props.state}</button>
    );
}

export default Loaf;