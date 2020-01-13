import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import GlobalStyle from '../styles/global';

import { APP_STATES } from '../store/modules/app';

import Menu from './Menu';

const Container = styled.div`
  .page_innerContent {
    max-width: ${props => props.theme.layout.contentMaxWidth};
    margin: auto;
    margin: ${props => props.theme.layout['spacing-large']} auto;
    padding: 0 ${props => props.theme.layout['spacing-medium']};
  }
`;

function Layout(props) {
  const appState = useSelector(state => state.app.appState);

  if (appState === APP_STATES.LOADING) {
    return null;
  }

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Menu />
      <div className="page_innerContent">{props.children}</div>
    </Container>
  );
}

export default Layout;
