import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './detail.css';

class Detail extends Component {
    state={data:'',route:"/accounts"};
    componentDidMount()
        {
            this.reqData();
           
        }
    reqData=()=>
        {
            let d=localStorage.getItem("detail");
            let reqdata=JSON.parse(d);
            this.refs.a.innerHTML=reqdata[0].id;
            this.refs.n.innerHTML=reqdata[0].name;
            this.refs.r.innerHTML=reqdata[0].time;
            this.refs.t.innerHTML=reqdata[0].type;
            this.refs.b.innerHTML=reqdata[0].amount;
        }

      delete=()=>
            {
                let confirmation=window.confirm("Are you sure to delete your account?");
                if (confirmation===true)
                    {
                        let reqIndex=JSON.parse(localStorage.getItem("id"));
                        let accArray=JSON.parse(localStorage.getItem("accounts"));
                        accArray.splice(reqIndex,1);
                        if(accArray.length>0)
                            {
                                let updatedArray=JSON.stringify(accArray);
                                localStorage.setItem("accounts",updatedArray);
                            }
                        else 
                        {
                            localStorage.removeItem("accounts");
                            localStorage.removeItem("detail");
                            localStorage.removeItem("id");
                        }
                        this.setState({route:"/accounts"});
                    }
                else    
                    {
                        this.setState({route:"/accounts/detail"});
                    }
            }
  render() {
    return (
      <div className="detail">
          <Link to='/accounts' className="back">Back to accounts</Link>
          <Link className="delete" onClick={this.delete} to={this.state.route} >Delete Accounts</Link>
           <p> Account Detail</p><hr />
           <table>
               <tbody>
                <tr>
                    <td className="htd">Account#</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="a" className="dtd htd"></td>
                </tr><hr/>
                <tr>
                    <td className="htd">Full Name</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="n" className="dtd htd"></td>
                </tr><hr />
                <tr>
                    <td className="htd">Registered</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="r" className="dtd htd"></td>
                </tr><hr />
                <tr>
                    <td className="htd">Account Type</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="t" className="dtd htd"></td>
                </tr><hr />
                <tr>
                    <td className="htd">Current Balance</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="b" className="dtd htd"></td>
                </tr>
                </tbody>
           </table><br/>
            <Link to="/accounts/withdraw" className="withdraw">Withdraw</Link>
            <Link to="/accounts/deposit" className="deposit">Deposit</Link>
      </div>
    );
  }
}

export default Detail;
