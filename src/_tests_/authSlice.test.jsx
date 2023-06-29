import authReducer, { setAuthInfo, clearAuthInfo } from '../redux/authSlice';

describe('authSlice', () => {
  describe('reducer', () => {
    test('should handle initial state', () => {
      const initialState = { hasInitialDataFetched: true, token: null, username: '', id: null };
      expect(authReducer(undefined, {})).toEqual(initialState);
    });

    test('should handle setAuthInfo', () => {
      const initialState = { token: null, username: '', id: null };
      const authInfo = { username: 'testUser', id: 1, token: 'testToken' };
      const action = setAuthInfo(authInfo);
      const newState = authReducer(initialState, action);
      expect(newState).toEqual(authInfo);
    });

    test('should handle clearAuthInfo', () => {
      const initialState = { token: 'testToken', username: 'testUser', id: 1 };
      const action = clearAuthInfo();
      const newState = authReducer(initialState, action);
      expect(newState).toEqual({ token: null, username: '', id: null });
    });
  });

  describe('actions', () => {
    test('should create an action to set auth info', () => {
      const authInfo = { username: 'testUser', id: 1, token: 'testToken' };
      const expectedAction = {
        type: 'auth/setAuthInfo',
        payload: authInfo,
      };
      expect(setAuthInfo(authInfo)).toEqual(expectedAction);
    });

    test('should create an action to clear auth info', () => {
      const expectedAction = {
        type: 'auth/clearAuthInfo',
      };
      expect(clearAuthInfo()).toEqual(expectedAction);
    });
  });
});
