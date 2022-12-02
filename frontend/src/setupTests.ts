// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'


// MSW setup
const server = setupServer(
    rest.get(`${process.env.REACT_APP_API_URL}/time`, (req, res, ctx) => {
        return res(ctx.json({ epoch: Math.round(Date.now() / 1000) }))
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/metrics`, (req, res, ctx) => {
        return res(ctx.text('# MOCK fake prometheus data'))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())