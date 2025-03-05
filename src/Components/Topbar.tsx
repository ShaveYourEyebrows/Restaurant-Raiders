import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton.tsx';
import '../App.css';

function Topbar(){
    return(
        <div className = "Top-Bar">
            <NavLink className="Main-Link" to = "/main" end>
                Home
            </NavLink>
            <NavLink className="Contact-Link" to="/contact" end>
                Contact Details
            </NavLink>
            <LogoutButton />
        </div>
    );
}

export default Topbar;