import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./detail.css";

class Withdraw extends Component {
    constructor(props)
        {
            super(props);
            this.state={id:""};
            this.withdraw=this.withdraw.bind(this);
            this.getdetail=this.getdetail.bind(this);
            let arr=localStorage.getItem("detail");
            let array=JSON.parse(arr);
            let iid=array[0].id;
            this.state={id:iid};
        }
    getdetail()
    {
        let index=localStorage.getItem("id");
        let i=JSON.parse(index);
        return i;
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
    handletransaction=(amount,id)=>
        {
        let tArray=[];
        let t=new this.Transaction(id,"debit",amount);
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

withdraw()
    {
        let indexinacc=this.getdetail();
        let withdrawn=this.refs.amount.value;
        if(Number(withdrawn)===0 || withdrawn<0)
            {
                alert("You have withdrawn no amount.");
            }
        else    
            {

                let d=localStorage.getItem("detail");
                let detail=JSON.parse(d);
                if(detail[0].amount<withdrawn)
                    {
                        alert("You have insufficient balance to withdraw");
                    }
                else
                    {
                        let updatedamount=detail[0].amount-withdrawn;
                        if(updatedamount<100)
                            {
                                alert("You can't proceed.You must have 100 Rs in account");
                            }
                       else
                       {
                            detail[0].amount=updatedamount;
                            localStorage.setItem("detail", JSON.stringify(detail));
                            let arr=localStorage.getItem("accounts");
                            let array=JSON.parse(arr);
                            let ddd=detail[0];
                            array.splice(indexinacc,1,ddd);
                            let updatedarray=JSON.stringify(array);
                            localStorage.setItem("accounts",updatedarray);

                            this.handletransaction(withdrawn,this.state.id);
                       }
                    }
            }
    }

  render() {
    return (
      <div className="withdraw_c">
           <div><p>Withdraw from account</p></div>
           <span>Amount to Withdraw</span>
           <input type="number" ref="amount" /><br />
           <span>Description(<small>optional</small>)</span>
           <input type="text" placeholder="description of transaction" /><br/>
            <span>
                <Link to="/accounts/detail" className="green" onClick={this.withdraw}>withdraw</Link>
                <Link to="/accounts/detail" className="red">cancel</Link>
            </span>
      </div>
    );
  }
}

export default Withdraw;
