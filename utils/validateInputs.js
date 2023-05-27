import { body } from "express-validator";
import timezone from "moment-timezone";


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
    