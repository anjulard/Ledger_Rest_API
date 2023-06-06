import React, { useState, useEffect } from 'react';

const ShowLeases = () => {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    fetchLeases();
  }, []);

  const fetchLeases = async () => {
    try {
      const response = await fetch('http://localhost:4000/lease/'); 
      const data = await response.json();
      setLeases(data);
    } catch (error) {
      console.error('Error fetching leases:', error);
    }
  };

  return (
    <div>
      <h1 className="lease">Lease Information</h1>
        <table className="lease-list">
        <thead className="lease-list">
            <tr>
            <th>Lease Id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Frequency</th>
            <th>Weekly Rent</th>
            <th>Timezone</th>
            </tr>
        </thead>
        <tbody>
            {leases.map((lease) => (
            <tr key={lease.lease_id}>
                <td>{lease.lease_id}</td>
                <td>{lease.start_date}</td>
                <td>{lease.end_date}</td>
                <td>{lease.frequency}</td>
                <td>{lease.weekly_rent}</td>
                <td>{lease.timezone}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default ShowLeases;
