import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders with default placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Custom search" />);
    expect(screen.getByPlaceholderText('Custom search')).toBeInTheDocument();
  });

  it('works as an uncontrolled component', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('works as a controlled component', () => {
    const handleChange = jest.fn();
    render(<SearchBar value="controlled" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Search');
    
    expect(input).toHaveValue('controlled');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith('new value');
  });
});