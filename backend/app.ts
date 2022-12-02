import express from 'express';
import prometheusMiddleware from 'express-prometheus-middleware';
import cors from 'cors';
import TimeController from './controllers/time.controller';
import auth from './middleware/auth';

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(auth);
app.use(prometheusMiddleware({
    metricsPath: '/metrics',
    collectDefaultMetrics: true
}))
app.get('/time', new TimeController().getEpoch);

export default app;
