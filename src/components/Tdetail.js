import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './detail.css';

class Tdetail extends Component {
    state={data:'',route:"/accounts"};
    componentDidMount()
        {
            this.reqData();
           
        }
    reqData=()=>
        {
            let d=localStorage.getItem("detail");
            let reqdata=JSON.parse(d);
            this.refs.a.innerHTML=reqdata[0].acc;
            // this.refs.n.innerHTML=reqdata[0].name;
            this.refs.r.innerHTML=reqdata[0].time;
            this.refs.t.innerHTML=reqdata[0].type;
            this.refs.b.innerHTML=reqdata[0].amount;
        }

  render() {
    return (
      <div className="detail">
          <Link to='/transactions' className="back">Back to transactions</Link>
           <p> Transaction Detail</p><hr />
           <table>
               <tbody>
                <tr>
                    <td className="htd">Account#</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="a" className="dtd htd"></td>
                </tr><hr/>
                {/* <tr>
                    <td className="htd">Full Name</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="n" className="dtd htd"></td>
                </tr><hr /> */}
                <tr>
                    <td className="htd">Registered</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="r" className="dtd htd"></td>
                </tr><hr />
                <tr>
                    <td className="htd">Account Type</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="t" className="dtd htd"></td>
                </tr><hr />
                <tr>
                    <td className="htd">Amount</td>
                    <td colSpan="4" style={{textAlign:"left"}} ref="b" className="dtd htd"></td>
                </tr>
                </tbody>
           </table><br/>
      </div>
    );
  }
}

export default Tdetail;
