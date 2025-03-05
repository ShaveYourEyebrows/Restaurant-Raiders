import Topbar from './Topbar.tsx';
import '../App.css';
import logo from './logo512.png'

function MainScreen(){
    return(
        <>
            <Topbar />
            <div className='mainBundle'>
                <h2 className = 'mainTitle'>This is the main screen.</h2>
                <p className='infoPara'>
                    This is where we'd have all of our functionality.
                    However, we didn't join up all of our things yet!
                    You can browse between the two pages and log back
                    out.
                </p>
            </div>
            <img src= {logo} className="mainScreenLogo" alt="logo goes here" />
        </>
    );
}

export default MainScreen;