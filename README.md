# Ledger REST API

The Ledger REST API is a Node.js application that provides an endpoint to fetch the ledger for a given lease. It generates a ledger based on the provided lease details, such as start date, end date, weekly amount, and frequency of payment.

## Usage

To retrieve the ledger, you need to provide the following details:

- Start Date: The start date of the lease in ISO standard format. (start_date)
- End Date: The end date of the lease in ISO standard format.(end_date)
- Weekly Amount: The amount to be paid weekly for the lease.(weekly_rent)
- Frequency of Payment: The frequency of the lease payment, specified as a string.(frequency)
- Timezone : The timezone of the property should be provided as a string of [tz database names](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

The API will respond with an array of line items, each containing the following information:

- Start Date: The start date of the line item in ISO string format.
- End Date: The end date of the line item in ISO string format.
- Total Amount: The total amount for the line item.

The total amount for each line item in the ledger is calculated based on the payment frequency.

## Documentation

For more detailed information about the components, functionality, and usage of the Ledger REST API, please refer to the [Ledger REST API Documentation](https://www.icloud.com/iclouddrive/04aOgej-GdjMr0Ry31PeQ4fGA#Ledger_Rest_API_Documentation).

## Prerequisites

Before running the application, make sure you have Node.js installed on your machine. You can install Node.js by visiting the [Node.js website](https://nodejs.org/en) and following the installation instructions.

To verify that Node.js is installed correctly, you can run the following command in your terminal:

```shell
npm -v && node -v
```

## How to Run the Application

To run the Ledger REST API on your local machine, follow these steps:

1. Clone the repository to your local machine:

```shell
git clone https://github.com/anjulard/Ledger_Rest_API.git
```

2. Install the project dependencies:

```shell
npm install
```

3. Build and run the project:

```shell
npm start
```

The server will start running on port 4000.

## Generating the Ledger

To generate the ledger for a lease, you can use Postman or any other API testing tool to execute requests and check responses.
<br></br>
### Step 1: Create a New Lease

To create a new lease, make a POST request to the following endpoint:

```
POST http://localhost:4000/lease/
```

In the request body, provide the lease details including the start date, end date, payment frequency, weekly amount, and timezone.
##### Sample Request

| Input | Value |
| --- | --- |
| start_date | "2021-01-31T14:48:00" |
| end_date   | "2022-09-05T14:48:00" |
| frequency  | "MONTHLY"   |
| weekly_rent| 234   |
| timezone.  | "AU"  |

### Step 2: Retrieve the Lease Details

To retrieve the lease you created, make a POST request to the following endpoint:

```
POST http://localhost:4000/lease/{Lease_Id}
```

Replace `{Lease_Id}` with the actual Lease ID obtained from Step 1.
<br></br>
### Step 3: Generate the Ledger

To generate the ledger for a specific lease, make a GET request to the following endpoint:

```
GET http://localhost:4000/lease/generateLedger/{Lease_Id}
```

Replace `{Lease_Id}` with the actual Lease ID obtained from Step 1.

##### Sample Response
This is the data that the endpoint might have in its response:

| Start Date | End Date | Amount |
| --- | --- | --- |
| "2021-01-31T09:18:00.000Z" | "2021-02-28T18:29:59.999Z" | 1016.79 |
| "2021-03-01T18:29:59.999Z" | "2021-03-31T09:18:00.000Z" | 1016.79 |
| "2021-04-01T09:18:00.000Z" | "2021-04-30T18:29:59.999Z" | 1016.79 |
| "2021-05-01T18:29:59.999Z" | "2021-05-31T09:18:00.000Z" | 1016.79 |
| ...  | ...  | ... |

<br></br>
Feel free to reach out if you have any further questions or need assistance.



