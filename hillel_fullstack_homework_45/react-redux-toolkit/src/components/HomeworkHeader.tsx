import "../css/homeworkHeader.css";

function HomeworkHeader(props) {
    return (
        <header>
            <h1>{props.num}</h1>
            <h2>{props.name}</h2>
        </header>
    );

}

export default HomeworkHeader;