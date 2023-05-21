import express from "express";
import bodyParser from 'body-parser';  // incoming post req

import ledgerRoutes from './routes/ledger.js';

// initialize express app
const app = express();
// specify the port for backend
const PORT = 4000;

// sending and requsting data from json format
app.use(bodyParser.json());

// running ledgerRoutes when url starts to '/lease'. 
app.use('/lease', ledgerRoutes);

app.get('/', (req, res) => {

    // response to home page
    res.send('Hello from Ledger');
});

// listen for incoming requests
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
