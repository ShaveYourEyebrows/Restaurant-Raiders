import Topbar from './Topbar.tsx';
import '../App.css';

function Contact(){
    return(
        <>
            <Topbar />
            <div className='numDiv'>
                <h2 className='contactDetails'>Manager Contact Details:</h2>
                <ul className='phoneNumberList'>
                    <li className='phoneNumberItem'>Manager John: 087-457-4007</li>
                    <li className='phoneNumberItem'>Manager Kovacs: 087-461-1087</li>
                    <li className='phoneNumberItem'>Manager Freddy: 087-983-1987</li>
                    <li className='phoneNumberItem'>Manager Markus: 087-064-2009</li>
                </ul>
            </div>

            <div className='noticeDiv'>
                <h2 className='noticeHeader'>Notice to Employees</h2>
                <p className='noticePara'>
                    We have gotten reports of employees contacting
                    managers after hours! Please refrain from contacting
                    higher-ups after 5PM, including those on the night shift.
                    Thank you - Manager Kovacs.
                </p>
            </div>
        </>
    );
}

export default Contact;