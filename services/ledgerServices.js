
// Create ledger
export const generateLedger = (start_date, end_date, frequency, weekly_rent) => {
    let lineItem = [];
    const { frequencyType, numberOfDays } = this.getFrequencyData(frequency);
     const amount = this.getAmount(weekly_rent, frequencyType);
     
     if (amount != null) {
        for (let index = new Date(toISOString(start_date)) ; index < toISOString(end_date); index.setDate(index.getDate()+numberOfDays)) {
            let startDate = index;
            let endDate   = index.setDate(index.getDate() + numberOfDays);

            lineItem.push( {startDate, endDate, amount} );
            
        }

        return lineItem;
    
     }
}

export const getFrequencyData = (frequency) => {
    let frequencyObj = {};

    switch (frequency) {
        case "WEEKLY" :
            frequencyObj = {
                frequencyType: "WEEKLY",
                numberOfDays: 7
            }
            break;
        case "FORTNIGHTLY" :
            frequencyObj = {
                frequencyType: "FORTNIGHTLY",
                numberOfDays: 14
            }
            break;
        default:
            break;

    }
    return frequencyObj;
}

export const getAmount = (weekly_rent, frequencyType ) => {
    const amount = 0;
    if (weekly_rent > 0 && frequencyType == "WEEKLY") {
        amount = weekly_rent;

    }else if (weekly_rent > 0 && frequencyType == "FORTNIGHTLY") {
        amount = weekly_rent * 2;
    }

    return amount;
}

