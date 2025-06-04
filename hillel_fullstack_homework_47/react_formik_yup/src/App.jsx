import './css/App.css'
import FormPractice from "./components/FormPractice.jsx";
import HomeworkHeader from "./components/HomeworkHeader.jsx";
import Plate from "./components/Plate.jsx";

function App() {
  const hwNumber = "ДЗ № 47";
  const hwName = "Створення форм в React за використанням бібліотек Formik та Yup";

  return (
    <>
      <div>
        <HomeworkHeader number={hwNumber} name={hwName}/>

        <Plate name="Form">
          <FormPractice/>
        </Plate>
      </div>
    </>
  )
}

export default App
