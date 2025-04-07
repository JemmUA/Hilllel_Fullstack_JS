import '../App.css'

function Towel(props) {
    const {name} = props;
    console.log("Name:", name);

    return (
        <>
            <div id ="towel">{props.name}</div>
        </>
    )
}

export default Towel
