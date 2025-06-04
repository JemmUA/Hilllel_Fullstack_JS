import "../css/plate.css"

function Plate(props) {
    return (
        <div className="plate">
            {props.name && <h2>{props.name}</h2>}
            {props.children}
        </div>
    );

}

export default Plate;