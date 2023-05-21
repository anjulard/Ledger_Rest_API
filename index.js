import express from "express";
import bodyParser from 'body-parser';  // incoming post req

import ledgerRoutes from './routes/ledger.js';


const app = express();

const PORT = 4000;


app.use(bodyParser.json());

// running ledgerRoutes when url starts to '/lease'. 
app.use('/lease', ledgerRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Ledger');
});


app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
