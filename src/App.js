import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import Create from './components/Create';
 import Detail from './components/Detail';
 import Tdetail from './components/Tdetail';
 import Withdraw from './components/withdraw';
 import Deposit from './components/deposit';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/accounts' component={Accounts} />
              <Route exact path='/accounts/detail' component={Detail} />
              <Route exact path='/transactions/detail' component={Tdetail} />
              <Route exact path='/accounts/withdraw' component={Withdraw} />
              <Route exact path='/accounts/deposit' component={Deposit} />
              <Route exact path='/accounts/create' component={Create} />
              <Route exact path='/transactions' component={Transactions} />
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
