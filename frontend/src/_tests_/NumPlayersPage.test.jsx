import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { MemoryRouter, Routes, Route} from 'react-router-dom';
import { fireEvent, render,screen,getByTestId} from '@testing-library/react';
import NumPlayersPage from '../pages/NumPlayersPage';


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

// in progress
// test('renders MyComponent for /path', () => {
//     const { getByText} = render(
//       <MemoryRouter initialEntries={['/players']}>
//         <Routes>
//           <Route path="/players" element={<NumPlayersPage/>} />
//         </Routes>
//       </MemoryRouter>
//     );

//     // "checks text"
    
//     const element = screen.getByRole('button',{name:/increase-btn1/i})
//     fireEvent.click(element);
//     expect(screen.getByText('2')).toBeInTheDocument();

// })