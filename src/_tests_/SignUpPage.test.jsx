import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';
import apiRequests from '../services/ApiRequests';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
  };
});

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('SignUpPage', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useNavigate.mockReturnValue(mockNavigate);
  });

  test('renders the SignUpPage component', () => {
    render(<SignUpPage />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('dispatches the signUp action on form submission', async () => {
    const mockResponse = { user: { username: 'user1', id: 1, jti: 'uSeR-1-ToKeN' } };
    const mockSignUp = jest.fn().mockResolvedValue(mockResponse);
    jest.spyOn(apiRequests, 'signUp').mockImplementation(mockSignUp);

    render(<SignUpPage />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

        fireEvent.change(usernameInput, { target: { value: 'user1' } });
        fireEvent.change(emailInput, { target: { value: 'user1@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);
        
        await waitFor(() => {
            expect(mockSignUp).toHaveBeenCalledTimes(1);
            expect(mockSignUp).toHaveBeenCalledWith('user1', 'user1@test.com', 'password', 'password');
            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith({ 
                type: 'auth/setAuthInfo',
                payload: { username: 'user1', id: 1, token: 'uSeR-1-ToKeN' },
            });
            expect(mockNavigate).toHaveBeenCalledTimes(1);
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });
});
