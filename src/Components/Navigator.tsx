import '../App.css';
import UsernameInput from './UsernameInput.tsx';
import PasswordInput from './PasswordInput.tsx';
import Message from './Message.tsx';
import { useNavigate } from 'react-router-dom';
import logo from './rr-logo.png'
import { useSelector, connect } from 'react-redux';
import { RootState } from '../store.ts';
import { getInTheSystem } from '../store.ts';
import { useDispatch } from 'react-redux';

function Navigator() {

const logLad = useSelector((state : RootState) => state.login.loggedIn); //This is to show I can access the state at any time
const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleSubmit(e : any) { //React.ChangeEvent<HTMLFormElement>
    // Prevent the browser from reloading the page
    e.preventDefault();

    var dangerousChars = ["'", '"', "\\", "%", "\n", "\_", "\b", "\%", "\r", "\t", "\Z"]
    var failVar = true;

    if(e.target[0].value.length !== 0 && e.target[1].value.length !== 0){
      dangerousChars.every((dangerousChar) => {
        if(e.target[0].value.includes(dangerousChar) || e.target[1].value.includes(dangerousChar)){
          e.target[0].value = "";
          e.target[1].value = "";
          alert("Invalid character used in query! (May be attempted SQL injection)")
          failVar = false;
          return false;
        }else{
          return true;
        }
      })
      if(failVar === true){
        dispatch(getInTheSystem())
        navigate('/main')
      }
    }else{
      e.target[0].value = "";
      e.target[1].value = "";
      alert("You have to enter a username and password!")
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

export default connect(store=>store)(Navigator);