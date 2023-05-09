import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render,screen,fireEvent} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Homepage';



test('test HomePage render/',() => {
    const { getByText, queryByText } = render(
        <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        </MemoryRouter>
      );
    
    // "checks text"
    expect(getByText('Snakes and Ladders')).toBeInTheDocument();
    expect(getByText('PLAY')).toBeInTheDocument();
    expect(queryByText('Play')).not.toBeInTheDocument();
})

test('clicking button navigates to the specified route', () => {
    
    const { getByText, queryByText } = render(
        <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        </MemoryRouter>
      );
  
    // Simulate button click
    fireEvent.click(getByText('PLAY'));
  
    // Assert that the About page component is rendered
    expect(screen.getByText('COM PLAYERS')).toBeInTheDocument();
});