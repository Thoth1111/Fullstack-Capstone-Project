import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashPage from '../pages/SplashPage';

test('renders the SplashPage component', () => {
    render(
    <Router>
        <SplashPage />
    </Router>
    );
});
  
