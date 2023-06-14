import { generateLedger }   from '../services/ledgerServices.js';
import { prepareResponse }  from '../utils/response.js';
import { validateLedger }   from '../utils/validateInputs.js';
import leases               from "../controllers/leaseController.js";

// Generate Ledger for a specific lease id
export const fetchLedger = (req, res) => {

    const errors = validateLedger(req.params.lease_id);
    if (errors.length > 0){
        return res.status(400).json({ errors });
    }

    const reqLease = leases.find((lease) => lease.lease_id == req.params.lease_id);
    
    const lineItem = generateLedger(reqLease);
    
    const response = prepareResponse(lineItem);
    res.send(response);

}