import React from 'react';
import ReactDOM from 'react-dom';

class CounterCharacters extends React.Component{
constructor(props){
  super(props);
  this.state={
    message:''  
  };
}

  onMessageChange(text){
    this.setState({message:'Message has '+text.length+' number of characters'});
  }
  render(){
    return <div>
       <h2>Welcome to count charachter components....</h2>
       <p><label>Enter Message: <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label></p>
       <p><label>{this.state.message}</label></p>
    </div>
  
  }

}

class Employee extends React.Component{
state={counter:0};
addEmployee=()=>{
  // alert('Adding a new Employee.');
  this.setState({counter:this.state.counter+1});
}

render(){
  return <div>
      <h2>Welcome to Pragim technologys</h2>
      <p><button onClick={this.addEmployee} >Add Employee</button></p>
      <p><label>Add Employee button is clicked <b>{this.state.counter} times</b></label></p>
  </div>
}
}

// const element=<Employee></Employee>
const element=<CounterCharacters></CounterCharacters>

ReactDOM.render(element,document.getElementById("root"))