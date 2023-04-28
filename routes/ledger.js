import express from "express";

import { fetchLedger } from "../controllers/ledgerController.js";

// initialize router
const router = express.Router();

// In index.js '/users' is used as the starting path. All routes starting with '/ledger' here.
router.get('/:lease_id', fetchLedger);



export default router;