import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import GlobalStyle from './styles';

const CardPage = loadable(() => import('./pages/CardPage'));
const TablePage = loadable(() => import('./pages/TablePage'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={CardPage} />
        <Route path="/table" component={TablePage} />
      </Switch>
    </>
  );
}

export default App;
