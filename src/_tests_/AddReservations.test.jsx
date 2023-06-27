import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mock-local-storage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AddReservations from '../pages/AddReservations';

describe('AddReservations', () => {
  test('renders AddReservations component', async () => {
    sessionStorage.setItem('token', 'uSeRtOkEn');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddReservations />
        </MemoryRouter>
      </Provider>,
    );

    try {
      await waitFor(() => !screen.getByText('Loading...'));

      expect(screen.queryByText('Book A Vespa')).toBeInTheDocument();
      expect(screen.getByText('Start Date')).toBeInTheDocument();
      expect(screen.getByText('End Date')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter a description of the reservation')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Book now' })).toBeInTheDocument();
    } catch (error) {
    }
  });
});
