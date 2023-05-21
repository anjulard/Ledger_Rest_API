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
    let leaseId = uuidv4();
    leases.push({...lease, lease_id: leaseId });
    
    res.send(`New lease with Lease Id : ${leaseId} is added successfully.`);

}

// GET all lease
export const getLease = (req, res) => {
    res.send(leases);

}

// GET Lease for a specific lease id
export const fetchLease = (req, res) => {
    const { lease_id } = req.params;

    res.send(leases.find((lease) => lease.lease_id == lease_id));

}

// DELETE Route
export const deleteLease = (req, res) => {
    const { lease_id } = req.params;

    const getLease = leases.find((lease) => lease.lease_id == lease_id);
    const index = leases.indexOf(getLease);

    leases.splice(index, 1);

    res.send(` Lease with Lease ID : ${lease_id} is deleted successfully`);

}