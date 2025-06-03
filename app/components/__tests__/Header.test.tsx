import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders a single sign in button initially', () => {
    render(<Header />);
    
    // Should find only one auth button
    const authButton = screen.getByRole('button');
    expect(authButton).toHaveTextContent('Sign In');
    
    // Should not show sign up button
    expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
  });

  it('changes to sign out icon when authenticated', () => {
    render(<Header />);
    
    // Click the sign in button
    const authButton = screen.getByRole('button');
    fireEvent.click(authButton);
    
    // Should have the sign out icon
    const signOutIcon = screen.getByRole('img', { hidden: true });
    expect(signOutIcon).toBeInTheDocument();
    
    // Should not have sign out text
    expect(authButton).not.toHaveTextContent('Sign Out');
  });

  it('toggles between sign in and sign out states', () => {
    render(<Header />);
    
    const authButton = screen.getByRole('button');
    
    // Initial state
    expect(authButton).toHaveTextContent('Sign In');
    
    // Click to sign in
    fireEvent.click(authButton);
    const signOutIcon = screen.getByRole('img', { hidden: true });
    expect(signOutIcon).toBeInTheDocument();
    
    // Click to sign out
    fireEvent.click(authButton);
    expect(authButton).toHaveTextContent('Sign In');
  });
});