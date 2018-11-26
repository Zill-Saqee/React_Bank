import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Create extends Component {

      state={ acId:"",amount:"" }
   User(id,n,t,a,time) 
      {
            this.id=id;
            this.name=n;
            this.type=t;
            this.amount=a;
            this.time=time;
      }

      Transaction(acno,type,amount) 
      {
            let random=Math.random()*10000000000;
            this.id=Math.round(random);
                let t=new Date();
                let ttime=t.toLocaleString();
            this.time=ttime;
            this.acc=acno;
            this.type=type;
            this.amount=amount;
      }    
  handletransaction=(id,amount)=>
      {
        let tArray=[];
        let t=new this.Transaction(id,"credit",amount);
        let arr=localStorage.getItem("transactions");
        let array=JSON.parse(arr);
        if(array===null)
          {
             tArray.push(t);
             let updatedArray=JSON.stringify(tArray);
             localStorage.setItem("transactions",updatedArray);
          }
        else 
          {
              let arr=localStorage.getItem("transactions");
              let array=JSON.parse(arr);
              array.push(t);
              let tArray=JSON.stringify(array);
              localStorage.setItem("transactions",tArray);
          }
      }

  handleaccount=()=> {
    let name=this.refs.name.value;
    let type=this.refs.type.value;
    let amount=this.refs.amount.value;
    let t=new Date();
    let time=t.toLocaleString();
    let random=Math.random()*10000000000;
    let id=Math.round(random);
    if (name===''|| type===''|| amount==='')
      {
        alert("No account created.");
      }
    else 
      {
       
        // this.id=Math.round(random);
        let user=new this.User(id,name,type,amount,time);
        if(localStorage.getItem("accounts")===null)
          {
            let arr=[];
            arr.push(user);
            let accounts=JSON.stringify(arr);
            localStorage.setItem("accounts",accounts);
            this.handletransaction(id,amount);
          }
          else 
            {
              let arr=[];let array=[];
              arr=localStorage.getItem("accounts");
              array=JSON.parse(arr);
              array.push(user);
              let accounts=JSON.stringify(array);
              localStorage.setItem("accounts",accounts);
              this.handletransaction(id,amount);
            }
      }
     
  }  

  render() {
    return (
      <div className="create">
            <h1>Enter account details below</h1>
            <form>
              <span>Full Name</span><input  type="text" placeholder="Enter full name here" ref="name" required/><hr />
              <span>Account Type</span>
              <select ref="type">
                  <option value="">Select Account Type</option>
                  <option value="current">Current</option>
                  <option value="saving">Saving</option>
              </select><hr />
              <span>Initial Deposit in Rs</span><input type="number" placeholder="1000" ref="amount" required></input><hr />
              {/* <input type="submit" value="CREATE ACCOUNT" onClick={this.name} />  */}
              <Link to="/accounts" onClick={this.handleaccount}>CREATE ACCOUNT</Link>
              <Link to="/accounts">VIEW ALL ACCOUNTS</Link>
             </form>
      </div>
    );
  }
}

export default Create;
