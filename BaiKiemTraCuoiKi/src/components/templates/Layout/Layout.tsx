import React from 'react';
import Header from '../../organisms/Header/Header';
import { Container } from 'react-bootstrap';

type TLayout = {
  children?: React.ReactNode;
};

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <Container fluid className='container-fluid-full'>
      <Header />
      <main className='main-content pb-10'>{children}</main>
    </Container>
  );
};

export default Layout;
