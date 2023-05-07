import { v4 as uuidv4 } from 'uuid';
import { generateLedger }  from '../services/ledgerServices.js';
import { prepareResponse }  from '../utils/response.js';
import { validateInputs } from "../utils/validateInputs.js";

// Data array is empty at start
let leases = [];

export const getLease = (req, res) => {
    res.send(leases);
    res.send('Lease Data');

}

// POST Route
export const createLease = (req, res) => {
    
    const lease = req.body;
    const errors = validateInputs(lease);
    if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }
      else {
        // Used spread operator
        // Push data into lease array
        leases.push({...lease, lease_id: uuidv4() });
        res.send(`Lease is added to the ledger successfully.`);
      }
     
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