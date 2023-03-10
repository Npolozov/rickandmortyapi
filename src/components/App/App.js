import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Person } from 'pages/Person';
import { GlobalStyle } from './GlobalStyle.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person" element={<Person />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
