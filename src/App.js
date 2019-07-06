import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
