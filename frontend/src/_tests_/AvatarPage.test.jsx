import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { AppContext, AppContextProvider } from '../AppContextProvider';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';
import AvatarPage from '../pages/AvatarPage';
import userEvent from '@testing-library/user-event'

let axiosMock;
beforeAll(()=>{
    axiosMock =  new MockAdapter(axios); // mocks http requests
    
});

afterEach(()=>{
    axiosMock.reset(); // To make sure that its in a consistent state for each test run
});

test('Renders avatar page correctly', ()=>{
    const   player = [{
        name:"Player 1",
        placement: 0,
        image: "",
        isHuman: true
    }];
    const initState = {
        currentID: 0, 
        maxPlayers:2,
        players: [player],
    };
    const {getByText, queryByText} =  render(
        <MemoryRouter initialEntries={['/avatar/0/2']}>
            <AppContext.Provider value={initState}>
                <AvatarPage/>
            </AppContext.Provider>
        </MemoryRouter>
    ); 
    expect(getByText('SELECT AVATAR')).toBeInTheDocument();
});

test('Pufferfish avatar is clicked and yellow border is shown', async ()=>{
    const   player = [{
        name:"Player 1",
        placement: 0,
        image: "",
        isHuman: true
    }];
    const initState = {
        currentID: 0, 
        maxPlayers:2,
        players: [player],
    };
     render(
        <MemoryRouter initialEntries={['/avatar/0/2']}>
            <AppContext.Provider value={initState}>
                <AvatarPage/>
            </AppContext.Provider>
        </MemoryRouter>
    ); 
    const avatarButton = screen.getByRole('button',{name:/avatar_pufferfish.png/i});
    await userEvent.click(avatarButton);
    expect(avatarButton).toHaveStyle('border-color: #F7DA86');
    
});

test('The next button and start game is disabled on render', async ()=>{
    const   player = [{
        name:"Player 1",
        placement: 0,
        image: "",
        isHuman: true
    }, 
    {name:"Player 2",
        placement: 0,
        image: "",
        isHuman: true
    }];
    const initState = {
        currentID: 0, 
        maxPlayers:2,
        players: [player],
    };
     render(
        <MemoryRouter initialEntries={['/avatar/0/2']}>
            <AppContext.Provider value={initState}>
                <AvatarPage/>
            </AppContext.Provider>
        </MemoryRouter>
    ); 
    const nextButton = screen.getByRole('button',{name:/nextPlayerAvatarBtn/i});
    expect(nextButton).toBeDisabled();
    const startGameButton = screen.getByRole('button',{name:/startGameBtn/i});
    expect(startGameButton).toBeDisabled();
    
});

test('The next button is disabled and start button is enabled when last player picked avatar', async ()=>{
    const   player = [{
        name:"Player 1",
        placement: 0,
        image: "",
        isHuman: true
    }, 
    {name:"Player 2",
        placement: 0,
        image: "",
        isHuman: true
    }];
    const initState = {
        currentID: 1, 
        maxPlayers:2,
        players: [player],
    };
     render(
        <MemoryRouter initialEntries={['/avatar/1/2']}>
            <AppContext.Provider value={initState}>
                <AvatarPage/>
            </AppContext.Provider>
        </MemoryRouter>
    ); 
    const avatarButton = screen.getByRole('button',{name:/avatar_pufferfish.png/i});
    await userEvent.click(avatarButton);
    expect(avatarButton).toHaveStyle('border-color: #F7DA86');

    const nextButton = screen.getByRole('button',{name:/nextPlayerAvatarBtn/i});
    expect(nextButton).toBeDisabled();
    const startGameButton = screen.getByRole('button',{name:/startGameBtn/i});
    expect(startGameButton).toBeEnabled();
});
