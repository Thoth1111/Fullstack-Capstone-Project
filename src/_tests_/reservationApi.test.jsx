import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { reservationApi } from '../redux/reservationAPI';

// Create a mock server
const server = setupServer(
  rest.get('https://booking-api-nhmg.onrender.com/reservations', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'Reservation 1' },
        { id: 2, name: 'Reservation 2' },
      ])
    );
  })
);

// Enable API mocking before tests
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests
afterEach(() => server.resetHandlers());

// Disable API mocking after tests are done
afterAll(() => server.close());

describe('AddReservations', () => {
  it('should fetch all reservations', async () => {
    const { result, waitForNextUpdate } = renderHook(() => reservationApi.endpoints.getAllReservations.useQuery(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Wait for the query to resolve
    await waitForNextUpdate();

    expect(result.current.data).toEqual([
      { id: 1, name: 'Reservation 1' },
      { id: 2, name: 'Reservation 2' },
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});
