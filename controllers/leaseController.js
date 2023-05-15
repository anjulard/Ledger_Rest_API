import { v4 as uuidv4 } from 'uuid';
import { validationResult } from "express-validator";

// Data array is empty at start
let leases = [];

// POST Route
export const createLease = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
    });
}
    const lease = req.body;
    //const errors = validateInputs(lease);
        let leaseId = uuidv4();
        leases.push({...lease, lease_id: leaseId });
        console.log(lease);
        res.send(`New lease with Lease Id : ${leaseId} is added successfully.`);

}

// GET all lease
export const getLease = (req, res) => {
    res.send(leases);

}