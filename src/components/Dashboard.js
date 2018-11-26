import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import icon from './icon.ico';
class Dashboard extends Component {

    componentWillMount()
        {
            let arr1=localStorage.getItem("accounts");
            if(arr1===null)
                {
                    this.setState({totalaccnts:0});
                }
            else
                {
                    let arrayofacnts=JSON.parse(arr1);
                    let totalaccnts=arrayofacnts.length;
                    this.setState({totalaccnts:totalaccnts});
                }
            let arr2=localStorage.getItem("transactions");            
            if(arr2===null)
                {
                    this.setState({ttransactions:0});
                }
            else
                {
                    let arrayoftrans=JSON.parse(arr2);
                    let ttransactions=arrayoftrans.length;
                    this.setState({ttransactions:ttransactions});
                }
        }

  render() {
    return (
      <div className="dashboard">
            <div className="dleft">
                <div className="top">
                    <img className='dicon' src={icon}  alt=""/>
                    <span>Accounts</span>
                    <div  className="dlinks">
                        <Link to='./accounts/create'><span></span>+Add new account</Link>
                        <Link to='/accounts'>View All</Link>
                    </div>
                </div><hr />
                <div align="center" className="bottom">
                    <Link to="./accounts" >{this.state.totalaccnts}</Link><br />
                    <Link to="./accounts" >accounts</Link>
                </div>
            </div>
            <div className="dright">
                <div className="top">
                     <img className='dicon' src={icon} alt=""  />
                     <span>Transactions</span>
                     <div  className="dlinks">
                        <Link to='./transactions'><span></span>View All</Link>
                    </div>
                </div><hr />
                <div align="center" className="bottom">
                    <Link to="./transactions" >{this.state.ttransactions}</Link><br />
                    <Link to="./transactions" >transactions</Link>
                </div>
            </div>
      </div>
    );
  }
}

export default Dashboard;
