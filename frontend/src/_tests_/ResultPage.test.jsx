import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes, Router } from 'react-router-dom';
import { AppContext } from '../AppContextProvider';
import ResultsPage from '../pages/ResultsPage';



test('AppContextProvider makes GET request to API to render player', ()=>{
    const   player = [{
        name:"Player 1",
        placement: 0,
        image: "avatar_dolphin",
        isHuman: true
      },
        {
            name:"Player 2",
            placement: 100,
            image: "avatar_octopus",
            isHuman: true
        }];
      const initState = {
          players: [player],
          removePlayer: vi.fn()
    };

    const { getByText, queryByText } = render(

        // needs to use initState since removePlayer() is called in this page
        <MemoryRouter initialEntries={['/results']}>
          <AppContext.Provider value={initState}>
            <ResultsPage/>
          </AppContext.Provider>
        </MemoryRouter>
      );

      expect(getByText('Player 2')).toBeInTheDocument();


});

