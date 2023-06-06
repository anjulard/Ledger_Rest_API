import React from "react";
import Modal from 'react-modal';


const AddLease = () => {
    const [start_date, setStartDate]   = React.useState('');
    const [end_date, setEndDate]       = React.useState('');
    const [frequency, setFrequency]    = React.useState('');
    const [weekly_rent, setWeeklyRent] = React.useState('');
    const [timezone, setTimezone]      = React.useState('');
    const [errorMessages, setErrorMessages]   = React.useState([]);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorModalOpen, setErrorModalOpen] = React.useState(false);

    const addLease = async() => {

        try {
            const result = await fetch("/lease",{
                method: "post",
                body: JSON.stringify({ start_date, end_date, frequency, weekly_rent, timezone}),
                headers: {
                    "Content-type" : "application/json",
                    "Accept": "application/json"
                }
            })

            const data = await result.json();
            
            if(!result.ok) {
                setErrorMessages(data.errors);
                setSuccessMessage('');
                setErrorModalOpen(true);
                return;

            }else if (data.success){
                setErrorMessages([]);
                setSuccessMessage(data.message);
                setStartDate('');
                setEndDate('');
                setFrequency('');
                setWeeklyRent('');
                setTimezone('');
            }
            
        } catch (error) {
            console.error('Error creating lease:', error);
        }
    };

    const handleClosePopup = () => {
        setSuccessMessage('');
      };

    return (
        <div className="lease">
            <h1>Add New Lease</h1>
            <input type="text" placeholder="Enter Start Date (YYYY-MM-DD'T'HH:mm:ss)" className="inputField" 
            value={start_date} onChange={(e) => {setStartDate(e.target.value)}}/>

            <input type="text" placeholder="Enter End Date (YYYY-MM-DD'T'HH:mm:ss)" className="inputField" 
            value={end_date} onChange={(e) => {setEndDate(e.target.value)}}/>

            <input type="text" placeholder="Enter Payment Frequency" className="inputField" 
            value={frequency} onChange={(e) => {setFrequency(e.target.value)}}/>

            <input type="text" placeholder="Enter Weekly Rent" className="inputField" 
            value={weekly_rent} onChange={(e) => {setWeeklyRent(e.target.value)}}/>

            <input type="text" placeholder="Enter Timezone" className="inputField" 
            value={timezone} onChange={(e) => {setTimezone(e.target.value)}}/>

            <button className="App-Button" onClick={addLease}>Add Lease</button>

            <Modal isOpen={errorModalOpen} onRequestClose={() => setErrorModalOpen(false)} contentLabel="Error Modal">
                <div className="error-modal">
                    <h2 className="error-modal-heading">Errors occurred:</h2>
                    <ul className="error-modal-list">
                        {errorMessages.map((error, index) => (
                            <li key={index} className="error-modal-item">{error.msg}</li>
                        ))}
                    </ul>
                    <button className="error-modal-close" onClick={() => setErrorModalOpen(false)}>Close</button>
                </div>
            </Modal>

            {successMessage && (
                <div className="success-popup">
                    <p>{successMessage}</p>
                    <button className="close-button" onClick={handleClosePopup}>Close</button>
                </div>
            )}
        </div>
    )
}

export default AddLease;