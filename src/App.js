import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
  
import TemplateDefault from './templates/Default';
import Home from './pages/Home ';

export default function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
}