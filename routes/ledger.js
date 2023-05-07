import express from "express";

import { fetchLedger, getLease, createLease } from "../controllers/ledgerController.js";
//import { validateLease } from "../controllers/leaseController.js";

// initialize router
const router = express.Router();

// Get available Lease
router.get('/', getLease);

// Create a new Lease
router.post('/', createLease);

// In index.js '/ledger' is used as the starting path. All routes starting with '/ledger' here.
router.get('/generateLedger/:lease_id', fetchLedger);



export default router;