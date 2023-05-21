import express                                             from "express";
import { getLease, createLease, deleteLease, fetchLease  } from "../controllers/leaseController.js";
import { fetchLedger }                                     from "../controllers/ledgerController.js";
import { body }                                            from "express-validator";


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
        .withMessage('Invalid end_date. Please add end_date in ISO Date Format.')
        .custom((value, { req }) => {
            if(value <= req.body.start_date) {
                throw new Error ('End date of Lease must be after start date');
            }
            return true;
        }),

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

// Get a specific Lease by giving lease id
router.get('/:lease_id', fetchLease);

router.delete('/:lease_id', deleteLease);

// In index.js '/lease' is used as the starting path. All routes starting with '/lease' here.
router.get('/generateLedger/:lease_id', fetchLedger);



export default router;