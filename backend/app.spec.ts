import request from 'supertest';
import app from './app';

describe('App', ()=>{
    const authorizationHeader = 'Bearer mysecrettoken';
    it('Uses the Prometheus middleware to handle the /metrics route', async () => { 
        const res = await request(app).get('/metrics').set('Authorization', authorizationHeader) ;

        // This is enough of an assert, as we do not want to test the Prometheus behaviour itself
        expect(res.status).toEqual(200);
    })

    it('Responds with the correct payload when a call to /time is made', async () => {
        const res = await request(app).get('/time').set('Authorization', authorizationHeader);

        expect(res.body).toHaveProperty('epoch');
        expect(typeof res.body.epoch).toBe('number');
    })

    it('Sends a 403 for unauthorized GET requests', async () => {
        const protectedEndpoints = ['/time', '/metrics'];
        protectedEndpoints.forEach( async (route) => {
            const res = await request(app).get(route);
            expect(res.status).toBe(403);
        })
    })
})