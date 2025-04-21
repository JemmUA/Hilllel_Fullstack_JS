import "../css/plate.css"

function Plate(props) {
    // console.log("Children:", children);
    return (
        <div className="plate">{props.children}
        </div>
    );

}

export default Plate;