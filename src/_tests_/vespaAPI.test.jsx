import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { vespaApi } from '../redux/vespaAPI';

// Create a mock server
const server = setupServer(
  rest.get('https://booking-api-nhmg.onrender.com/vespas', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'Vespa 1' },
        { id: 2, name: 'Vespa 2' },
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

describe('vespaApi', () => {
  it('should fetch all vespas', async () => {
    const { result, waitForNextUpdate } = renderHook(() => vespaApi.endpoints.getAllVespas.useQuery(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Wait for the query to resolve
    await waitForNextUpdate({ timeout: 3000 });

    expect(result.current.data).toEqual([
      { id: 1, name: 'Vespa 1' },
      { id: 2, name: 'Vespa 2' },
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});