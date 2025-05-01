import "../css/homeworkHeader.css";

function HomeworkHeader(props) {
const {number, name} = props;
    return (
        <header>
            <h1>{number}</h1>
            <h2>{name}</h2>
        </header>
    );
}

export default HomeworkHeader;