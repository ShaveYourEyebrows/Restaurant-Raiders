import Topbar from './Topbar.tsx';
import '../App.css';

function MainScreen(){
    return(
        <>
            <Topbar />
            <div>
                <h1>This is the main screen.</h1>
            </div>
        </>
    );
}

export default MainScreen;