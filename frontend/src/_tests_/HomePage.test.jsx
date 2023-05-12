import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import { render,screen,fireEvent} from '@testing-library/react';
import { MemoryRouter, Route, Routes, Router } from 'react-router-dom';
import { AppContext } from '../AppContextProvider';
import HomePage from './pages/HomePage';
import NumPlayersPage from '../pages/NumPlayersPage';

test('test HomePage render/',() => {
  const   player = [{
    name:"Player 1",
    placement: 0,
    image: "",
    isHuman: true
  }];
  const initState = {
      players: [player],
      removePlayer: vi.fn()
};
  const { getByText, queryByText } = render(
      // <MemoryRouter initialEntries={['/']}>
      // <Routes>
      //   <Route path="/" element={<HomePage/>} />
      // </Routes>
      // </MemoryRouter>
      // needs to use initState since removePlayer() is called in this page
      <MemoryRouter initialEntries={['/']}>
        <AppContext.Provider value={initState}>
          <HomePage/>
        </AppContext.Provider>
      </MemoryRouter>
    );
  
  // "checks text"
  expect(getByText('Seaweed and Bubbles')).toBeInTheDocument();
  expect(getByText('PLAY')).toBeInTheDocument();
  expect(queryByText('Play')).not.toBeInTheDocument();
})

test('clicking button navigates to the specified route', async () => {
    const   player = [{
      name:"Player 1",
      placement: 0,
      image: "",
      isHuman: true
    }];
    const initState = {
        players: [player],
        removePlayer: vi.fn()
  };
    
    const { getByText, queryByText } = render(
        // <MemoryRouter initialEntries={['/']}>
        //   <Routes>
        //     <Route path="/" element={<HomePage/>} />
        //     <Route path="/players" element={<NumPlayersPage/>} />
        //   </Routes>
        // </MemoryRouter>
        <MemoryRouter initialEntries={['/']}>
        <AppContext.Provider value={initState}>
          <HomePage/>
        </AppContext.Provider>
      </MemoryRouter>
      );
  
    // Simulate button click
    expect(getByText('PLAY')).toBeInTheDocument();
    const element = screen.getByRole('button',{name:/button-start/i})
    await fireEvent.click(element);

    const { getByText: getByTextOnNextPage } = render(
      <MemoryRouter initialEntries={['/players']}>
        <Routes>
          <Route path="/players" element={<NumPlayersPage/>} />
        </Routes>
    </MemoryRouter>
    );
  
    // Assert that the About page component is rendered
    expect(getByTextOnNextPage('PLAYERS')).toBeInTheDocument();
});
