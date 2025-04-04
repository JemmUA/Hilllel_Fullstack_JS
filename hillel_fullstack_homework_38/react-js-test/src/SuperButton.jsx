import { useState } from 'react'
import './SuperButton.css'

function SuperButton(props) {
    const {start, diff, text, children, onClick} = props;
    // console.log("Props start:", start, "diff:", diff, "text:", text, "children:", children);

    let [count, setCount] = useState(props.start);

    const onButtonClick = () => {
        setCount(count + props.diff);
        // onClick & onClick("OnClick:", text, count);
    }

    return (
    <>
        <button className="super-button" onClick={onButtonClick}>
            {children} with funny numbers -- {count} -- {count*2} -- {count*4} --
        </button>
    </>
)
}

export default SuperButton
