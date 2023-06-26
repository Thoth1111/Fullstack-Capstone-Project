import { render, screen, fireEvent } from '@testing-library/react'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

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
        const submitButton = screen.getByText('Sign Up');

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(confirmPasswordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('dispatches the signUp action on form submission', async () => {
        render (<SignUpPage />);

        const mockResponse = { user: { username: 'user1', id: 1, jti: 'uSeR-1-ToKeN' } };
        const mockSignUp = jest.fn().mockResolvedValue(mockResponse);
        jest.mock('../services/ApiRequests', () => ({
            signUp: mockSignUp,
        }));

        const usernameInput = screen.getByPlaceholderText('Username');
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
        const submitButton = screen.getByText('Sign Up');

        fireEvent.change(usernameInput, { target: { value: 'user1' } });
        fireEvent.change(emailInput, { target: { value: 'user1@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);

        expect(mockSignUp).toHaveBeenCalledTimes(1);
        expect(mockSignUp).toHaveBeenCalledWith('user1', 'user1@test.com', 'password', 'password');
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ 
            type: 'auth/setAuthInfo',
            payload: { username: 'user1', id: 1, jti: 'uSeR-1-ToKeN' },
        });
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
});