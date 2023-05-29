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


Please refer the documentation [Ledger_Rest_API_Documentation](https://www.icloud.com/iclouddrive/04aOgej-GdjMr0Ry31PeQ4fGA#Ledger_Rest_API_Documentation) for components, functionality, usage, and any other relevant details.

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


## Steps to generate the Ledger

You can use Postman to execute requests and check responses.

- Step 01 :
  Create a new lease with required inputs
  
    - Start Date              : Should be provided in ISO Standard format
    - End Date                : Should be provided in ISO Standard format
    - Weekly Amount           : Should be provided in number format
    - Frequency of the payment: Should be provided as a String
    - Timezone                : provided as a string of [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
<br></br>
`POST Request http://localhost:4000/lease/`


  ##### Sample Request

  | Input | Value |
  | --- | --- |
  | start_date | "2021-01-31T14:48:00" |
  | end_date   | "2022-09-05T14:48:00" |
  | frequency  | "MONTHLY"   |
  | weekly_rent| 234   |
  | timezone.  | "AU"  |

  <br></br>
  <img width="869" alt="Screenshot 2023-05-23 at 20 06 33" src="https://github.com/anjulard/Ledger_Rest_API/assets/50151335/afba5808-6e24-4557-8fa3-53feeb4b9278">
  <br></br>

- Step 02 : Copy the Auto-Generated Lease Id given by the response.
  ##### Sample Response
  `Lease with Leade ID : {Lease_Id} is added successfully.`
  <br></br>
  <img width="869" alt="Screenshot 2023-05-23 at 20 10 26" src="https://github.com/anjulard/Ledger_Rest_API/assets/50151335/bf83739e-9911-4860-977f-6df7d5d18201">
<br></br>

  If you want to retrieve the lease you created, use

  `POST Request http://localhost:4000/lease/{Lease_Id}`

  <br></br>
  <img width="869" alt="Screenshot 2023-05-23 at 20 17 44" src="https://github.com/anjulard/Ledger_Rest_API/assets/50151335/c1c61e31-f795-46d4-bbc6-a1aba73380d9">
  <br></br>


- Step 03 :
To generate the ledger for a particular lease, use below requ format with the Lease Id
<br></br>
`GET Request http://localhost:4000/lease/generateLedger/{Lease_Id}`

  <br></br>
  <img width="869" alt="Screenshot 2023-05-23 at 20 12 44" src="https://github.com/anjulard/Ledger_Rest_API/assets/50151335/d95422f7-b9a5-454a-a27e-09c302c9afd3">
  <br></br>




