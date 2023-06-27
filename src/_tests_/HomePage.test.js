import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mock-local-storage';
import 'matchmedia-polyfill';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Home from '../pages/Home';

describe('HomePage', () => {
  test('renders the HomePage component', async () => {
    sessionStorage.setItem('token', 'uSeRtOkEn');
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    try {
      await waitFor(() => !screen.getAllByText('Loading...'));
      expect(screen.queryByText('LATEST MODELS')).toBeInTheDocument();
      expect(screen.queryByText('Please select a Vespa Model')).toBeInTheDocument();
    } catch (error) {
      console.error(error);
    }
  });
});
