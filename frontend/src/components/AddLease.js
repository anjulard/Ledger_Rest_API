import React from "react";


const AddLease = () => {
    const [start_date, setStartDate]   = React.useState('');
    const [end_date, setEndDate]       = React.useState('');
    const [frequency, setFrequency]    = React.useState('');
    const [weekly_rent, setWeeklyRent] = React.useState('');
    const [timezone, setTimezone]      = React.useState('');
    

    const addLease = async() => {
        
        let result = await fetch("/lease",{
            method: "post",
            body: JSON.stringify({ start_date, end_date, frequency, weekly_rent, timezone}),
            headers: {
                "Content-type" : "application/json",
                "Accept": "application/json"
            }
        }).then()
        
        console.warn(result);
    }

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
        </div>
    )
}

export default AddLease;