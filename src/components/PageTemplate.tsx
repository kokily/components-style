import React from 'react';
import styled from 'styled-components';
import Header from './Header';

// Styles
const Main = styled.main``;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Main>{children}</Main>
    </>
  );
};

export default PageTemplate;