import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render,screen,fireEvent,getByRole} from '@testing-library/react';
import { MemoryRouter, Route, Routes, Router } from 'react-router-dom';
import { AppContext } from '../AppContextProvider';

import HomePage from "./pages/Homepage";
import NumPlayersPage from '../pages/NumPlayersPage';




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

test('clicking button navigates to the specified route', async () => {
    
    const { getByText, queryByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/players" element={<NumPlayersPage/>} />
          </Routes>
        </MemoryRouter>
      );
  
    // Simulate button click
    expect(getByText('PLAY')).toBeInTheDocument();
    const element = screen.getByRole('button',{name:/button-start/i})
    await fireEvent.click(element);

    const { getByText: getByTextOnNextPage } = render(
      <MemoryRouter initialEntries={['/players']}>
    </MemoryRouter>
    );
  
    // Assert that the About page component is rendered
    expect(getByTextOnNextPage('PLAYERS')).toBeInTheDocument();
});
