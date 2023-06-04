import React, { useEffect, useState } from "react";

const ShowLeases = () => {
    const [leases, setLeases] = useState([]);

    useEffect(() => {
        getLease();
    }, []);

    const getLease = async () => {
        let result = await fetch('http://localhost:4000/lease/',{
            method: "GET",
            mode: 'no-cors'
        })

        setLeases(result);
    }

    console.warn(leases);

    return (
        <div className="lease-list">
            <h1>Lease List</h1>
            <ul>
                <li>Lease Id</li>
                <li>Start Date</li>
                <li>End Date</li>
                <li>Frequency</li>
                <li>Weekly Rent</li>
                <li>Timezone</li>
            </ul>
        </div>
    )

}

export default ShowLeases;