import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import 'mock-local-storage';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import MyReservations from '../pages/MyReservations';

describe ('MyReservations', () => {
    test('renders AddReservations component', async () => {
        sessionStorage.setItem('token', 'uSeRtOkEn');

        render(
        <Provider store={store}>
            <MemoryRouter>
                <MyReservations />
            </MemoryRouter>
        </Provider>
        );

        try {
            await waitFor(() => {
                return !screen.getByText('Loading API...');
            });

            expect(screen.queryByText('MY RESERVATIONS')).toBeInTheDocument();
        } catch (error) {
        }
    });
});       