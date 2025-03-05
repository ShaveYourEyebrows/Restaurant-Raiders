import Topbar from './Topbar.tsx';
import '../App.css';

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
        </>
    );
}

export default MainScreen;