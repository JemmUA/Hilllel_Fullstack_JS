import "../css/plate.css"

function Plate(props) {
    return (
        <div className="plate">
            {props.children}
        </div>
    );

}

export default Plate;