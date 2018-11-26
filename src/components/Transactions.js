import React, { Component } from 'react';
import ticon from "./icon.ico";
import {Link} from 'react-router-dom';

class Transactions extends Component {
  constructor(props)
        {
          super(props);
          let arr=localStorage.getItem("transactions");
          let array=JSON.parse(arr);
          if(array===null)
            {
              this.state={heading:false};
            }
          else  
            {
              this.state={heading:true};
              let arr=localStorage.getItem("transactions");
              let tarray=JSON.parse(arr);
              this.state={array:tarray};
            }
        }

        sendID = (id,i) => {
          let ID=id;
          localStorage.setItem('id', i);
          let d=localStorage.getItem("transactions");
          let data=JSON.parse(d);
          let rqdata=data.filter(function(item){
             return Number(item.id)===Number(ID);
          })
          let reqdata=JSON.stringify(rqdata);
          localStorage.setItem("detail",reqdata);
        }
 
  render() {
    const h=<p style={{textAlign:"center",fontFamily:"sans-serif",color:"#ccc"}}>No transactions have been made yet</p>;
    // const d=<tr key={index}><td><Link to={"/accounts/detail"} onClick={()=> this.sendID(item.id,index) }>{item.id}</Link></td><td>{item.time}</td><td>{item.acc}</td><td>{item.type}</td><td>{item.amount}</td></tr>
    return (
      <div className="transactions">
            <Link className="gobackfromt" to='/' >Back to dashboard</Link>
            <div className="innerdivT">
                <img src={ticon} height="40%" alt="" />
                <span>Transactions</span>
            </div>
            <table className="accTable" cellSpacing="0px">
                { this.state.heading===false  ? h : <thead><tr><th>TransactionId</th><th>Time</th><th>Account#</th><th>Account Type</th><th>Amount</th></tr></thead>   }
                <tbody>
                {this.state.heading=== true ? "" : this.state.array.map(  (item,index)=>{  return (<tr key={index}><td><Link to={"/transactions/detail"} onClick={()=> this.sendID(item.id,index) }>{item.id}</Link></td><td>{item.time}</td><td>{item.acc}</td><td>{item.type}</td><td>{item.amount}</td></tr>)   })} 
                </tbody>
            </table>
      </div>
    );
  }
}

export default Transactions;
