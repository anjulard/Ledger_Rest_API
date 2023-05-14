import { v4 as uuidv4 } from 'uuid';
import { validateInputs } from "../utils/validateInputs.js";

// Data array is empty at start
let leases = [];

// POST Route
export const createLease = (req, res) => {
    
    const lease = req.body;
    const errors = validateInputs(lease);
    if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
    
    }else {
        let leaseId = uuidv4();
        leases.push({...lease, lease_id: leaseId });
        console.log(lease);
        res.send(`Lease ${leaseId} is added successfully.`);
    }
     
}

// GET all lease
export const getLease = (req, res) => {
    res.send(leases);

}