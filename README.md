# Ledger Rest API
This is a Node.js REST API that offers an endpoint to fetch the ledger for a given lease.

To get the generated ledger, user should provide
- Start Date              : Should be provided in ISO Standard format
- End Date                : Should be provided in ISO Standard format
- Weekly Amount           : Should be provided in number format
- Frequency of the payment: Should be provided as a String

A ledger will be generated for a given Lease Id.

This API will respond with an array of line items as below,
- Start date of that line item in ISO String
- End date of that line item in ISO String
- Total amount of the line item as a number

The total amount for each line item in the ledger will be based on the payment frequency.

## Pre-requisites
- Install Node.js https://nodejs.org/en
- Install Git

## How To Run the Application
- Clone the repository
<br></br>
`git clone <git lab template url> <project_name>`

- Install dependencies
<br></br>
`npm install`

- Build and run the project
<br></br>
`npm start`


- Server will be running on port 4000.
  Navigate to `http://localhost:4000`



