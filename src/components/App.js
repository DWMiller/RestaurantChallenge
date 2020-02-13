import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import { fetchData } from '../store/modules/actions';

import Layout from './Layout';

import Main from '../pages/Main';
import Section from '../pages/Section';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/:sectionId" component={Section} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
