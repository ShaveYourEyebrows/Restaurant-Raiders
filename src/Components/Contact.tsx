import Topbar from './Topbar.tsx';
import '../App.css';

function Contact(){
    return(
        <>
            <Topbar />
            <div>
                <h2 className='contactDetails'>Manager Contact Details:</h2>
                <h4 className='phoneNumber'>Manager John: 087-457-4007</h4>
            </div>
        </>
    );
}

export default Contact;