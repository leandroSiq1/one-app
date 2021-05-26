import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
  
import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';

import Customers from './pages/customers/List';
import CustomersRegister from './pages/customers/Register';
import Home from './pages/Home ';

export default function App() { 
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister}/>
          </Route>

          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={Customers}/>
          </Route>

          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home}/>
          </Route>
          
        </Switch>
      </TemplateDefault>
    </Router>
  );
}