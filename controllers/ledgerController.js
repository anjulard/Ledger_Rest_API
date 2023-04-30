import { v4 as uuidv4 } from 'uuid';
import { generateLedger }  from '../services/ledgerServices.js';
import { prepareResponse }  from '../utils/response.js';

// Data array is empty at start
let leases = [];

export const getLease = (req, res) => {
    res.send(leases);
    res.send('Lease Data');

}

// POST Route
export const createLease = (req, res) => {
    
    const lease = req.body;

    // Used spread operator
    // Push data into lease array 
    leases.push({...lease, lease_id: uuidv4() });

    res.send(`Lease ${lease.lease_id} is added to the ledger.`);
}

// Generate Ledger for a specific lease id
export const fetchLedger = (req, res) => {
    const { lease_id } = req.params;
    let { start_date, end_date, frequency, weekly_rent } = req.body;
    start_date = new Date(start_date).toISOString();
    end_date   = new Date(end_date).toISOString();
    
    const lineItem = generateLedger(start_date, end_date, frequency, weekly_rent);
    
    // Prepare response
    const response = prepareResponse(lineItem);
    res.send(response);

}