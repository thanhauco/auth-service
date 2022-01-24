import request from 'supertest';
import app from '../src/app.js';
test('GET /', async () => {
  await request(app).get('/').expect(200);
});