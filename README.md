# Ledger Rest API
This is a Node.js REST API that provide an endpoint to fetch the ledger for a given lease.

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


## Prerequisites
This project requires NodeJS (version 8 or later).
- Install [Node.js](https://nodejs.org/en)

To make sure you have them available on your machine, try running the following command.
```sh
$ npm -v && node -v
```

## How to run the application
- Start with cloning this repo on your local machine:
```sh
git clone https://github.com/anjulard/Ledger_Rest_API.git
```

- Install dependencies
```sh
npm install
```

- Build and run the project
```sh
npm start
```

- Server will be running on port 4000.    

  Navigate to `http://localhost:4000`

## Steps to generate the Ledger

- Step 01 :
  Create a new lease with required inputs
  
    - Start Date              : Should be provided in ISO Standard format
    - End Date                : Should be provided in ISO Standard format
    - Weekly Amount           : Should be provided in number format
    - Frequency of the payment: Should be provided as a String
    - Timezone                : provided as a string of [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
<br></br>
`POST Request http://localhost:4000/ledger/`

  ##### Sample Input

  | Input | Value |
  | --- | --- |
  | start_date | "2021-01-31T14:48:00" |
  | end_date   | "2022-09-05T14:48:00" |
  | frequency  | "MONTHLY"   |
  | weekly_rent| 234   |
  | timezone.  | "AU"  |


- Step 02 : Copy the Auto-Generated Lease Id given by the response.
  ##### Sample Output
  `Lease with Leade ID : {Lease_Id} is added successfully.`

- Step 03 :
Generate the ledger for a particular lease by providing the Lease Id
<br></br>
`GET Request http://localhost:4000/ledger/generateLedger/{Lease_Id}`




