import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import { MemoryRouter, Routes, Route} from 'react-router-dom';
import { fireEvent, render,screen,getByTestId} from '@testing-library/react';
import NumPlayersPage from '../pages/NumPlayersPage';
import userEvent from '@testing-library/user-event'
import { AppContext } from '../AppContextProvider';


test('test NumPage render', () => {
    const { getByText, queryByText } = render(
      <MemoryRouter initialEntries={['/players']}>
        <Routes>
          <Route path="/players" element={<NumPlayersPage/>} />
        </Routes>
      </MemoryRouter>
    );

    // "checks text"
    expect(getByText('PLAYERS')).toBeInTheDocument();
    expect(getByText('COM PLAYERS')).toBeInTheDocument(); 
    expect(queryByText('About me!')).not.toBeInTheDocument();
})

//in progress
test('renders MyComponent for /path', () => {
      const initState = {
        currentID: 0, 
        maxPlayers:2,
        setMaxPlayers: vi.fn()
    };
    render(
        <MemoryRouter initialEntries={['/players']}>
            <AppContext.Provider value={initState}>
            <NumPlayersPage/>
            </AppContext.Provider>
        </MemoryRouter>
    );

    // "checks text"
    
    const element = screen.getByRole('button',{name:/increase-btn1/i})
    userEvent.click(element);
    expect(screen.getByText('2')).toBeInTheDocument();

})