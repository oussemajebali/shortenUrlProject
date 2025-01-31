import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders URL Shortener heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/URL Shortener/i);
    expect(headingElement).toBeInTheDocument();
});

test('displays error when URL input is empty', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Shorten/i));
    const errorElement = screen.getByText(/Please enter a URL/i);
    expect(errorElement).toBeInTheDocument();
});