import moment from 'moment';

export const validateInputs = (input) => {
    const validInputs = ["start_date", "end_date", "frequency", "weekly_rent"];
    let errors = [];
    for (let element of validInputs) {
        if(! Object.keys(input).includes(element)) {
            errors.push(`${element} is required field`);
            return errors;
        }
    }
    // Check date validation 
    if (! (moment(input.start_date, "YYYY-MM-DDTHH:mm:ss", true).isValid() && 
                                        moment(input.end_date, "YYYY-MM-DDTHH:mm:ss", true).isValid())) {
        errors.push('Invalid date format of date');
        return errors;
            
    }

    // Check number validation for weekly rent
    if (! Number.isFinite(input.weekly_rent)) { 
        errors.push('Invalid number format for Weekly Rent');
        return errors;
    }

    return errors;
    
  }