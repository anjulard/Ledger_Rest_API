import express                                             from "express";
import { getLease, createLease, deleteLease, fetchLease  } from "../controllers/leaseController.js";
import { fetchLedger }                                     from "../controllers/ledgerController.js";
import { validateInputs }                                  from "../utils/validateInputs.js";


const router = express.Router();

// Create a new Lease
router.post('/', validateInputs(), createLease);

// Get all available Lease
router.get('/', getLease);

// Get a specific Lease by giving lease id
router.get('/:lease_id', fetchLease);

router.delete('/:lease_id', deleteLease);

// In index.js '/lease' is used as the starting path. All routes starting with '/lease' here.
router.get('/generateLedger/:lease_id', fetchLedger);



export default router;