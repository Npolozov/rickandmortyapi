import { Home } from 'pages/Home/Home';
import { Person } from 'pages/Person/Person';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Person />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
