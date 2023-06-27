import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

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

describe('LoginPage', () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useNavigate.mockReturnValue(mockNavigate);
    });

    test('renders the LoginPage component', () => {
        render(<LoginPage />);
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByRole('button', { name: 'Log In' });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
});