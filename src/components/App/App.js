import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Person } from 'pages/Person';
import { GlobalStyle } from './GlobalStyle.styled';
import { HomeTwo } from 'pages/Hometwo/Hometwo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/person" element={<Person />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
