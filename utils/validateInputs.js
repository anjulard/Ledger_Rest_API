import { body } from "express-validator";
import timezone from "moment-timezone";
import leases   from "../controllers/leaseController.js";


  export const validateInputs = () => {
    
    return [
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
    
    body('timezone')
        .notEmpty()
        .custom(value => {
            if (! isValidTimezone(value)) {
                throw new Error ('Please enter a valid timezone.');
            }
            return true;
        })

    ]
  }

  const isValidTimezone = (zone) => {
    return !!(timezone.tz.zone(zone));

  }

  export const validateLedger = (leaseId) => {
    let errors       = [];
    const foundLease = leases.find(lease => lease.lease_id === leaseId);
    
    if (! isValidUUID(leaseId)) {
        errors.push('Invalid format of Lease Id.');
        return errors;
    }

    if (!foundLease) {
        errors.push('Lease not found.');
        return errors;
    }

    return errors;
  }
  

  export const isValidUUID = (uuid) =>  {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }