// To Do - Working on proper test plan to test ledger generation functionality. Modifications are yet to be done to cover each test scenario.

import baseUrl from '../utils/baseUrl';
import request from 'supertest';

// test post request
  describe('POST /', () => {
    it('should create a new lease with valid inputs', async () => {
      const requestBody = {
        start_date: '2021-01-28T14:48:00',
        end_date: '2022-01-10',
        frequency: 'MONTHLY',
        weekly_rent: 20.00,
        timezone: 'Africa/Abidjan',
      };
  
      request(baseUrl)
        .post('/')
        .send(requestBody)
  
      .expect(200);
    });
  });

// test get all leases
describe('GET /', () => {
  
  it('should get all leases', async () => {
    request(baseUrl).get('/')
    .expect(200);
  });
});

