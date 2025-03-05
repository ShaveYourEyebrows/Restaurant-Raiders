import '../App.css';
import UsernameInput from './UsernameInput.tsx';
import PasswordInput from './PasswordInput.tsx';
import Message from './Message.tsx';
import { useNavigate } from 'react-router-dom';
import logo from './logo512.png'

function Navigator() {

  let navigate = useNavigate();

  function handleSubmit(e : any) { //React.ChangeEvent<HTMLFormElement>
    // Prevent the browser from reloading the page
    e.preventDefault();


    console.log("Boobly bop")
    console.log(typeof(e))
    console.log(e.target)
    console.log(e.target[0].value)

    if(e.target[0].value.length !== 0 && e.target[1].value.length !== 0){
      navigate('/main')
    }
  }

    const msg = "Welcome to Restaurant Raiders";
    return (
      <div className="App">
        <header className="App-header">
        <img src= {logo} className="logo" alt="logo goes here" />
          <h2>{msg}</h2>
          <form className = "input-form" method="post" onSubmit={handleSubmit}>
            <UsernameInput/>
            <PasswordInput/>
            <button className = "loginButt" type="submit">Login</button>
          </form>
          
          <Message/>
        </header>
      </div>
    );
}

export default Navigator;