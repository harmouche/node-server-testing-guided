const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    test('that the testing environment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('GET /', () => {

        let res = {};
        beforeEach(async () => {
            res = await request(server).get('/');
        });

        it('should return 200 ok', () => {
            // return request(server).get('/')
            //     .then(res => {
            //         expect(res.status).toBe(200);
            //     })
            expect(res.status).toBe(200);
        });
        it('should return 200 ok using async/await', async () => { //this "test/it" and the above one do the same test, but this one will wait for server to responsd
            // const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
        it('should return JSON object', async () => {
            // const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });
        it('should return {api:"up"}', () => {
            expect(res.body).toEqual({ api: 'up'});
        })
    });
});