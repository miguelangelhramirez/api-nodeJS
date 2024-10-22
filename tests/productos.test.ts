import {describe, expect, test} from '@jest/globals';
import request, {Response} from 'supertest';
import app from '../src/app';
import { AppDataSource } from '../src/db/db';
import { createProductMother } from './productosHelpers';

beforeAll(async () => {
    await AppDataSource.initialize();
    console.log("Database connected for tests");
});

afterAll(async () => {
    await AppDataSource.destroy();
});

describe("GET api/products/", () => {
    let createdProduct:Response;
    let nonExistingId:number = -1;

    it('responds with a status 201 code', async () => {
        const response = await createProductMother();
        expect(response.status).toBe(201);
    });

    it('responds with a status 200 code', async () => {
        const response = await request(app).get('/api/products/');
        expect(response.status).toBe(200);
    });

    it('responds with a json', async () => {
        const response = await request(app).get('/api/products/')
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))      
        expect(response.body.data).toBeInstanceOf(Array);
    });

    it('responds with a existing product', async() => {

        createdProduct = await createProductMother();

        const getResponse = await request(app).get(`/api/products/${createdProduct.body.data.id}`);
        expect(getResponse.status).toBe(200);
        expect(getResponse.body).toHaveProperty('data');
        expect(getResponse.body.data).toHaveProperty('id', createdProduct.body.data.id);
        
    })

    it('responds with a 404 status non existing product', async() => {

        const getResponse = await request(app).get(`/api/products/${nonExistingId}`);
        expect(getResponse.status).toBe(404);
        
    })
    
});