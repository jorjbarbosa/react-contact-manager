import React from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
