import express from "express";
import { getLease, createLease  } from "../controllers/leaseController.js";
import { fetchLedger }            from "../controllers/ledgerController.js";

// initialize router
const router = express.Router();

// Create a new Lease
router.post('/', createLease);

// Get all available Lease
router.get('/', getLease);

// In index.js '/ledger' is used as the starting path. All routes starting with '/ledger' here.
router.get('/generateLedger/:lease_id', fetchLedger);



export default router;