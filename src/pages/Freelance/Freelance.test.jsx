// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { render, waitFor, screen } from '@testing-library/react';

// import Freelance from './Freelance.jsx';

// import { beforeAll, afterEach, afterAll } from 'vitest';

// const freelancersMockedData = [
//     {
//         name: 'Harry Potter',
//         job: 'Magicien frontend',
//         picture: '',
//     },
//     {
//         name: 'Hermione Granger',
//         job: 'Magicienne fullstack',
//         picture: '',
//     },
// ]
// const server = setupServer(
//     rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
//         return res(
//             ctx.json({ freelancersList: freelancersMockedData })
//         );
//     })
// );
// // const server = setupServer(
// //     rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
// //         return res(
// //             ctx.json({freelanceProfiles: freelancersMockedData})
// //         )
// //     })
// // );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// it('should display freelancers names', async () => {
    
//     render(<Freelance />)
//     await waitFor(() => screen.getByText('Harry Potter').toBeInTheDocument())
//     await waitFor(() => screen.getByText('Hermione Granger').toBeInTheDocument())
// });
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Freelance from './Freelance';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { http, HttpResponse } from 'msw'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
];

const server = setupServer(
    http.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(
            ctx.json({ freelancersList: freelancersMockedData })
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display freelancers names', async () => {
    render(
            <Freelance />
    )
    await waitForElementToBeRemoved(() => {
        screen.getByTestId('loader');
    })
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy();
        expect(screen.getByText('Hermione Granger')).toBeTruthy();
    });
});
