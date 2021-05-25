import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
  
import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import Home from './pages/Home ';
import Customers from './pages/Customers';

export default function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
        <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers}/>
          </Route>
          <Route path="/">
          <TemplatePage title="Página Inicial" Component={Home}/>
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
}