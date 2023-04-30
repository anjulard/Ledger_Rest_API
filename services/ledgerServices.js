import moment from 'moment';

// Create ledger
export const generateLedger = (start_date, end_date, frequency, weekly_rent) => {
    let lineItem = [];
    let numberOfDays = getFrequencyData(frequency);
    let amount = getAmount(weekly_rent, frequency);
     
     if (amount != null) {
        for (let index = moment(start_date) ; index.isBefore(end_date); index.add(numberOfDays, 'd')) {
            let startDate = moment(index);
            let endDate   = moment(startDate).add(numberOfDays, 'd');

            lineItem.push( {startDate, endDate, amount} );
            
        }

        return lineItem;
    
     }
}

// Get Payment Frequency data
export const getFrequencyData = (frequency) => {
    let numberOfDays;
    
    if (frequency === "WEEKLY") {
        numberOfDays = 7;
       
    }else if (frequency === "FORTNIGHTLY") {
        numberOfDays = 14;
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
    }

    return amount;
}

