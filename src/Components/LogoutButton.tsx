import { useNavigate } from 'react-router-dom';

function LogoutButton(){
  let navigate = useNavigate();
    return(
      <div>
        <button className = "logButt" onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
    );
}

export default LogoutButton;