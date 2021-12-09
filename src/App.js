import './App.css';
import  Home from './Home';
import AddUser from './AddUser';
import EditUser from  './EditUser';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from './Context/GlobalState';

// https://github.com/candraKriswinarto/react-crud-context-api

function App() {
  return (
    <div style={ {maxWidth: "30rem", margin:"4rem auto" } }>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
