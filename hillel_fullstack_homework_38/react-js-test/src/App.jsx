import { useState } from 'react'
import viteLogo from '/vite.svg'
import cattiLogo from '/catti_logo.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import SuperButton from "./SuperButton.jsx";

function App() {
  let [count, setCount] = useState(0);

  const onButtonClick = () => {
      setCount(count++);
  }
  // const countResult = useState(123);
  // console.log("countResult:", countResult);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://jemmua.github.io" target="_blank">
          <img src={cattiLogo} className="logo react" alt="Catti logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + ... + React</h1>
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        <button onClick={onButtonClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <SuperButton start={0} diff={1}>Super-Button</SuperButton>
      <SuperButton start={-1000} diff={10}>Puper-Button</SuperButton>
      <SuperButton start={-1000} diff={-10}>Duper-Button</SuperButton>
    </>
  )
}

export default App
