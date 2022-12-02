import { screen, waitFor } from '@testing-library/react';
import { render } from '../../test-utils/render';
import { Time } from '.';



describe('Time', () => {

    it('Displays a loader when retrieving data from the API', () => {
        render(<Time />);
    
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    }) 

    it('Displays the time from the server when it is retrieved', async () => {
        render(<Time />);
    
        expect(await screen.findByText(`Time from server: ${Math.round(Date.now() / 1000)}`)).toBeInTheDocument();
    })
})

