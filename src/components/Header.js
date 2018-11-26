import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
            <p>Bank</p>
            <ul>
                <li> <Link to="/">Dashboard</Link></li>
                <li> <Link to="/accounts">Accounts</Link></li>
                <li> <Link to="/transactions">Transactions</Link></li>
            </ul>
      </div>
    );
  }
}

export default Header;
