import moment from 'moment';


// Create ledger
export const generateLedger = (start_date, end_date, frequency, weekly_rent) => {
    let lineItem     = [];
    let numberOfDays ;
    let tempDate ;
    let amount       = getAmount(weekly_rent, frequency);
    end_date         = moment(end_date);
    for (let index = moment(start_date) ; index.isBefore(end_date); index.add(numberOfDays + 1, 'd')) {
        numberOfDays  = getFrequencyData(frequency, index);
        let startDate = moment(index);
        tempDate      = moment(startDate).add(numberOfDays, 'd');
            
        // Calculate amount to be paid for a line item that is cut short because of the end date.
        if ( end_date.isBefore(tempDate)) {
            tempDate            = tempDate.subtract(numberOfDays, 'd');
            let remainingdays   = getRemainingDays(end_date, tempDate);
            let remainingAmount = getRemainingAmount(weekly_rent, remainingdays);

            lineItem.push( { tempDate, end_date, remainingAmount } );

            break;
    
        }

        lineItem.push( { startDate, tempDate, amount } );
        numberOfDays = getFrequencyData(frequency, index);
            
    }      
        
    return lineItem;
    
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
            numberOfDays = Math.ceil(numberOfDays);
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

export const getRemainingDays = (end_date, tempDate) => {
    let remainingdays = (validateDate(end_date).getTime() - validateDate(tempDate).getTime())/ (1000 * 60 * 60 * 24);
    return remainingdays;

}


// Get same day every month for a given date.
export const getNextMonthDate = (date) => {
    var dt = new Date(date);
    if (dt.getDate() <= 28) {
        dt.setMonth(dt.getMonth() + 1);
    } else {
        dt = new Date(dt.getFullYear(), dt.getMonth() + 2, 0);
    }
    
    return validateDate(dt);
}


// Validate Date
export const validateDate = (date) => {
    return new Date(date);
}

// Get same day every month for a given date. Get the closest day in the month if the start date of a line item 
// doesn’t exist in some months.

export const getMonthlyDate = (start, end) => {
    let line = [];
    let temp;
    let numofmonths = 1;
    let startDate = moment(start);
    let nextdate = moment(start);
    for (let index = moment(start) ; index.isBefore(end); index.add(1, 'M')) {
        
        nextdate = start;
        moment(nextdate).add(numofmonths, 'M');

        if ( new Date(start).getDate() != new Date(moment(nextdate).add(numofmonths, 'M')).getDate()) {
            temp = new Date(moment(nextdate).add(numofmonths, 'M'));
            temp = new Date(temp.getFullYear(), temp.getMonth() + 1, 0);
            temp = moment(temp);
            line.push( { startDate, temp } );
            
        }else{ 
            temp = new Date(moment(nextdate).add(numofmonths, 'M'));
            line.push( { startDate, temp } );

        }
        
        numofmonths = numofmonths + 1;
        startDate = moment(temp).add(1, 'd');

    }

    return line;

}