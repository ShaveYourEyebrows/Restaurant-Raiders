import { useNavigate } from 'react-router-dom';
import { getOuttaTheSystem } from '../store.ts';
import { useDispatch } from 'react-redux';

function LogoutButton(){
  const dispatch = useDispatch();

function handleExit(){
  dispatch(getOuttaTheSystem())
  navigate('/')
}

  let navigate = useNavigate();
    return(
      <div>
        <button className = "logButt" onClick={handleExit}>
          Logout
        </button>
      </div>
    );
}

export default LogoutButton;