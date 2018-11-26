import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image from './icon.ico';

class Accounts extends Component {

    state={accdetails:""};

  update=(id)=>{  alert(id); }

  componentWillMount()
    { 
      let arr=localStorage.getItem("accounts");
      let array=JSON.parse(arr);
      if(array===[] || array===null)
            {
                this.setState({arrayofacnts:0});
                this.setState({table:false});
            }
      else
      {
        let arrayofacnts=JSON.parse(arr);
        let totalaccnts=arrayofacnts.length;
        this.setState({totalaccnts:totalaccnts});
        this.checkls();
      }
    }
    checkls=()=>
      {
        let arr=[];let array=[];
        arr=localStorage.getItem("accounts");
        if(arr==null)
          {
            this.setState({accdetails:''});
            this.setState({table:false});
            // this.state.accdetails="";
          }
        else 
          {
            array=JSON.parse(arr);
            this.setState({accdetails:array});
            this.setState({table:true});
            // this.state.accdetails=array;
          }
      }

      sendID = (id,i) => {
        let ID=id;
        localStorage.setItem('id', i);
        let d=localStorage.getItem("accounts");
        let data=JSON.parse(d);
        let rqdata=data.filter(function(item){
           return item.id===ID;
        })
        let reqdata=JSON.stringify(rqdata);
        localStorage.setItem("detail",reqdata);
        
      }
  render() {
    return (
      <div className="accounts">
            <Link className="goback" to='/' >Back to dashboard</Link>
            <Link className="addnew" to='/accounts/create' >+Add new account</Link>
            <div className="innerdivA">
                <img src={image} height="40%" alt="" /><span>Accounts</span>
            </div>
            {/* <div ref="accdetails">
                {  this.state.accdetails==='' ? <h2>No Accounts</h2> : this.state.accdetails.map(  (item,index)=>{  return(<li key={index}><span>{item.id}</span><span>{item.name}</span><span>{item.type}</span><span>{item.amount}</span></li>)   })}
            </div> */}
            <table className="accTable" cellSpacing="0px">
                {this.state.table===false ? <h2 style={{textAlign:"center",fontFamily:"sans-serif",color:"#ccc"}}>There are currently no accounts available</h2> : <thead><tr><th>Account #</th><th>Name</th><th>Registered</th><th>Account Type</th><th>Balance</th></tr></thead>   }
                <tbody>
                {this.state.arrayofacnts===0 ? "" :this.state.accdetails.map(  (item,index)=>{  return( <tr key={index}><td><Link to={"/accounts/detail"} onClick={()=> this.sendID(item.id,index) }>{item.id}</Link></td><td>{item.name}</td><td>{item.time}</td><td>{item.type}</td><td>{item.amount}</td></tr>)   })} 
                </tbody>
            </table>
      </div>
    );
  }
}

export default Accounts;
