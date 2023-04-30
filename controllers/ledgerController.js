import { v4 as uuidv4 } from 'uuid';
import { generateLedger }  from '../services/ledgerServices.js';
import { prepareResponse }  from '../utils/response.js';

// data array is empty at starts
let leases = [];

// POST Route
export const createLease = (req, res) => {
    
    const lease = req.body;

    // use spread operator
    // Push data into lease array 
    leases.push({...lease, lease_id: uuidv4() });

    res.send(`Lease ${ledger.lease_id} is added to the ledger.`);
}

// Generate Ledger for a specific lease id
export const fetchLedger = (req, res) => {
    const { lease_id } = req.params;

    const findLease = leases.find((lease) => lease.lease_id == lease_id);
    res.send(findLease);

    const lineItem = generateLedger(toISOString(findLease.start_date), toISOString(findLease.end_date), findLease.frequency, findLease.weekly_rent);
    
    // Prepare response
    const response = prepareResponse(lineItem);
    res.send(response);

}