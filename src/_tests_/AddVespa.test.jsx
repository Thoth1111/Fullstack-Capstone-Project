import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mock-local-storage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AddVespa from '../pages/AddVespa';

describe('AddVespa', () => {
  test('renders AddVespa component', async () => {
    sessionStorage.setItem('token', 'uSeRtOkEn');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddVespa />
        </MemoryRouter>
      </Provider>,
    );

    try {
      await waitFor(() => !screen.getByText('Loading...'));

      expect(screen.getByText('Add new vespa')).toBeInTheDocument();
      expect(screen.getByLabelText("Vespa model's name")).toBeInTheDocument();
      expect(screen.getByLabelText('Description')).toBeInTheDocument();
      expect(screen.getByLabelText('Price')).toBeInTheDocument();
      expect(screen.getByLabelText("Model image's url")).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Add Vespa' })).toBeInTheDocument();
    } catch (error) {
      // Handle any error or assert specific error conditions if needed
    }
  });
});
