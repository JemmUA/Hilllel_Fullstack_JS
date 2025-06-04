import '../css/index.css'
import React, {useState} from 'react';

const FormPractice = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting starts...")
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("... submitted!");
    console.log("User name: ", userName);
    console.log("Email: ", email);
    console.log("Age: ", age);
    console.log("Password: ", password);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="aUserName">User name: </label>
          <input id="aUserName" type="text" value={userName} placeholder="name" onChange={event => setUserName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="aAge">Age: </label>
          <input id="aAge" type="nember" value={age} placeholder="age" onChange={event => setAge(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="aEmail">E-mail: </label>
          <input id="aEmail" type="text" value={email} placeholder="e-mail" onChange={event => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="aPassword">Password: </label>
          <input id="aPassword" type="text" value={password} placeholder="password" onChange={event => setPassword(event.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPractice;