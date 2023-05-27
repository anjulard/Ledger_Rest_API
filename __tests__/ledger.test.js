import express from "express";
import request from "supertest";
import { createLease } from "../controllers/leaseController.js";
import { validateInputs } from "../utils/validateInputs.js";

const app = express();

app.post('/', validateInputs(), createLease);


  describe('POST /', () => {
    it('should create a new lease with valid inputs', async () => {
      const requestBody = {
        start_date: '2021-01-28T14:48:00',
        end_date: '2022-01-10',
        frequency: 'MONTHLY',
        weekly_rent: 20.00,
        timezone: 'Africa/Abidjan',
      };
  
      const response = await request(app)
        .post('/')
        .send(requestBody);
  
      expect(response.status).toBe(200);
    });
  });