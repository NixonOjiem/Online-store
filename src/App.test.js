import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// test('renders the navigation bar', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/shoppinglab/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('openNav function', () => {
  it('sets the width of the sidenav to 80% when screen width is less than 600px', () => {
    const sidenavRef = React.createRef();
    render(<App sidenavRef={sidenavRef} />);

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

    fireEvent.click(getByText('Open Nav')); // assuming you have a button with this text
    waitFor(() => expect(sidenavRef.current.style.width).toBe('80%'));
  });

  it('sets the width of the sidenav to 25% when screen width is greater than or equal to 600px', () => {
    const sidenavRef = React.createRef();
    render(<App sidenavRef={sidenavRef} />);

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });

    fireEvent.click(getByText('Open Nav')); // assuming you have a button with this text
    waitFor(() => expect(sidenavRef.current.style.width).toBe('25%'));
  });
});
