import moment from 'moment';


// Create ledger
export const generateLedger = (start_date, end_date, frequency, weekly_rent) => {
    let lineItem     = [];
    let numberOfDays = getFrequencyData(frequency, start_date);
    let amount       = getAmount(weekly_rent, frequency);
    end_date         = moment(end_date);
    
     if (amount != null) {
        for (let index = moment(start_date) ; index.isBefore(end_date); index.add(numberOfDays, 'd')) {
            let startDate = moment(index);
            let tempDate   = moment(startDate).add(numberOfDays, 'd');
            
            // Calculate amount to be paid for a line item that is cut short because of the end date.
            if ( end_date.isBefore(tempDate)) {
                tempDate = tempDate.subtract(numberOfDays, 'd');
                let remainingdays = (validateDate(end_date).getTime() - validateDate(tempDate).getTime())/ (1000 * 60 * 60 * 24);
                let remainingAmount = getRemainingAmount(weekly_rent, remainingdays);

                lineItem.push( { tempDate, end_date, remainingAmount } );

                break;
    
            }

            lineItem.push( { startDate, tempDate, amount } );
            
        }
        

        return lineItem;
    
     }
}


// Get Payment Frequency data
export const getFrequencyData = (frequency, start_date) => {
    let numberOfDays;
    
    if (frequency === "WEEKLY") {
        numberOfDays = 7;
       
    }else if (frequency === "FORTNIGHTLY") {
        numberOfDays = 14;
    }
    else if (frequency === "MONTHLY") {
        let next_date = getNextMonthDate(start_date);

        if (next_date instanceof Date) {
            numberOfDays = (validateDate(next_date).getTime() - validateDate(start_date).getTime())/ (1000 * 60 * 60 * 24);
       
        }else {
            numberOfDays = (next_date.getTime() - start_date.getTime())/ (1000 * 60 * 60 * 24) - 1;
        }
        
    }

    return numberOfDays;
}


// Calculate amount based on Frequency
export const getAmount = (weekly_rent, frequencyType ) => {
    let amount;
    if (weekly_rent > 0 && frequencyType === "WEEKLY") {
        amount = weekly_rent;

    }else if (weekly_rent > 0 && frequencyType === "FORTNIGHTLY") {
        amount = weekly_rent * 2;

    }else if (weekly_rent > 0 && frequencyType === "MONTHLY") {
        amount = ((weekly_rent / 7 ) * 365) / 12;
    }

    return amount.toFixed(2);
}


//Calculate total amount to be paid for the remaining days
export const getRemainingAmount = (weekly_rent, numberOfDays) => {
    let remainingAmount = (weekly_rent / 7) * numberOfDays;

    return remainingAmount.toFixed(2);
}


// Get same day every month for a given date.
export const getNextMonthDate = (date) => {
    var dt = new Date(date);
    dt = dt.setMonth(dt.getMonth() + 1);
   
    return validateDate(dt);
}


// Validate Date
export const validateDate = (date) => {
    return new Date(date);
}