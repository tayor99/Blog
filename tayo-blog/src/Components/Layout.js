import Header from './Header';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Newpost } from '../Pages/Newpost';

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<Newpost />} />
      </Routes>
    </>
  );
};

export default Layout;
