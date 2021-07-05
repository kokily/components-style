import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import loadable from '@loadable/component';

const CardPage = loadable(() => import('../pages/CardPage'));
const TablePage = loadable(() => import('../pages/TablePage'));

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background: ${oc.cyan[6]};

  a {
    margin-right: 1rem;
  }
`;

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Link to="/" onMouseOver={() => CardPage.preload()}>
        Card
      </Link>
      <Link to="/table" onMouseOver={() => TablePage.preload()}>
        Table
      </Link>
    </Container>
  );
};

export default Header;
