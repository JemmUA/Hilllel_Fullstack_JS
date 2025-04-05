import '../../App.css'
// import {FC} from 'react';

const  CounterButton = (props: {count: number, increment: () => void}) => {
    // console.log("Props:", props);
    return (
        <button onClick={props.increment}>Батончик №{props.count}</button>
    );
}

export default CounterButton;