import express                    from "express";
import { getLease, createLease  } from "../controllers/leaseController.js";
import { fetchLedger }            from "../controllers/ledgerController.js";
import { body }                   from "express-validator";

// initialize router
const router = express.Router();

// Create a new Lease
router.post('/', [
    body('start_date')
        .notEmpty()
        .withMessage('Start Date is required.')
        .isISO8601()
        .withMessage('Invalid start_date. Please add start_date in ISO Date Format.'),

    body('end_date')
        .notEmpty()
        .withMessage('End Date is required.')
        .isISO8601()
        .withMessage('Invalid end_date. Please add end_date in ISO Date Format.'),

    body('weekly_rent')
        .notEmpty()
        .withMessage('Weekly Rent is required')
        .isNumeric()
        .withMessage('Invalid weekly rent value. Please add weekly_rent in number format.'),
    body('frequency')
        .notEmpty()
        .withMessage('Frequency is required')
        .isIn(['WEEKLY', 'FORTNIGHTLY', 'MONTHLY'])
        .withMessage('Invalid frequency value. Frequency value should be WEEKLY, FORTNIGHTLY or MONTHLY'),

], createLease);


// Get all available Lease
router.get('/', getLease);


// In index.js '/ledger' is used as the starting path. All routes starting with '/ledger' here.
router.get('/generateLedger/:lease_id', fetchLedger);



export default router;