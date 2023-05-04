# Ledger Rest API
This is a Node.js REST API that offers an endpoint to fetch the ledger for a given lease.

To get the generated ledger, user should provide
- Start Date              : Should be provided in ISO Standard format
- End Date                : Should be provided in ISO Standard format
- Weekly Amount           : Should be provided in number format
- Frequency of the payment: Should be provided as a String

This API will respond with an array of line items as below,
- Start date of that line item in ISO String
- End date of that line item in ISO String
- Total amount of the line item as a number

The total amount for each line item in the ledger will be based on the payment frequency

## How To Run the Application
The user should provide the Lease Id to generate the ledger for that particular lease.
Server can be started using command,
<br></br>
`npm run start`
<br></br>

Server will be running on port 4000.



