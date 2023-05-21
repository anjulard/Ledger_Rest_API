import { generateLedger }  from '../services/ledgerServices.js';
import { prepareResponse }  from '../utils/response.js';

// Generate Ledger for a specific lease id
export const fetchLedger = (req, res) => {
    let { start_date, end_date, frequency, weekly_rent } = req.body;
    start_date = new Date(start_date).toISOString();
    end_date   = new Date(end_date).toISOString();
    
    const lineItem = generateLedger(start_date, end_date, frequency, weekly_rent);
    
    const response = prepareResponse(lineItem);
    res.send(response);

}