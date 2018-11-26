import React, { Component } from 'react';
import {  Link  } from "react-router-dom";
import "./detail.css"

class Deposit extends Component {
    constructor(props){ super(props); 
        this.getdetail=this.getdetail.bind(this);
        let arr=localStorage.getItem("detail");
        let array=JSON.parse(arr);
         let iid=array[0].id;
         this.state={id:iid};
         this.deposit=this.deposit.bind(this);
    }

    state={id:0}
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

    getdetail()
    {
        let index=localStorage.getItem("id");
        let i=JSON.parse(index);
        return i;
    }  


    handletransaction=(amount,id)=>
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

    deposit()
                {
                    let indexinacc=this.getdetail();
                    let add=this.refs.deposit.value;
                    if(add>0 || add===0)
                        {
                            if (this.refs.deposit.validity.rangeUnderflow) {
                                alert("Please enter a valid amount.");
                             }
                           else
                             {
                                 let d=localStorage.getItem("detail");
                                 let data=JSON.parse(d);
                                 let a=data[0].amount;
                                 let uamount=Number(a) + Number(add);
                                data[0].amount=uamount;
                                localStorage.setItem("detail", JSON.stringify(data));
                                let arr=localStorage.getItem("accounts");
                                let array=JSON.parse(arr);
                                let ddd=data[0];
                                array.splice(indexinacc,1,ddd);
                                let updatedarray=JSON.stringify(array);
                                localStorage.setItem("accounts",updatedarray);
                                this.handletransaction(Number(add),this.state.id);
                             }
                        }
                   else
                        {
                            alert("Please enter in amount field");
                        }
                }


  render() {
    return (
      <div className="withdraw_c">
           <div><p>deposit into account</p></div>
           <span>Amount to deposit</span>
           <input type="number" min="1" ref="deposit"/><br />
           <span>Description(<small>optional</small>)</span>
           <input type="text" placeholder="description of transaction" /><br/>
           <span>
                <Link to="/accounts/detail" className="green" onClick={this.deposit}>Deposit</Link>
                <Link to="/accounts/detail" className="red">cancel</Link>
            </span>
      </div>
    );
  }
}

export default Deposit;
