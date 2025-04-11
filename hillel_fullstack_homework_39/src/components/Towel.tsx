import '../App.css'

function Towel(props: any) {
    const {name} = props;
    console.log("Name:", name);

    return (
        <>
            <div id ="towel">{props.name}</div>
        </>
    )
}

export default Towel
