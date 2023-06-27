import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter as Router } from 'react-router-dom';
import SplashPage from '../pages/SplashPage';

describe('SplashPage', () => {
    test('renders the SplashPage component', () => {
        render(
        <Router>
            <SplashPage />
        </Router>
        );
        const signUpButton = screen.getByRole('link', { name: 'Sign Up' });
        const loginButton = screen.getByRole('link', { name: 'Log In' });

        expect(signUpButton).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    test('redirects to the login page when the login button is clicked', () => {
        const { container } = render(
            <Router initialEntries={['/']}>
                <SplashPage />
            </Router>
            );
        const loginButton = screen.getByRole('link', { name: 'Log In' });
        fireEvent.click(loginButton);
        
        const loginPage = screen.getByText('Log In'); 
        expect(loginPage).toBeInTheDocument();
        expect(container.querySelector('a[to="/signup"]')).not.toBeInTheDocument();
    });

    test('redirects to the signup page when the login button is clicked', () => {
        const { container } = render(
        <Router initialEntries={['/']}>
            <SplashPage />
        </Router>
        );
        const signUpButton = screen.getByRole('link', { name: 'Sign Up' });
        fireEvent.click(signUpButton);
        
        const signupPage = screen.getByText('Sign Up'); 
        expect(signupPage).toBeInTheDocument();
        expect(container.querySelector('a[to="/login"]')).not.toBeInTheDocument();
    });
});
  
