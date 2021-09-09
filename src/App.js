import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={user:"",pass:"",msg:""}
  }
  handleChange= (event) =>{
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    if(this.state.user === "Ameerah" && this.state.pass === "123"){
      this.setState({msg: "succefully login"})
    }else{
      this.setState({msg:"Failure login"})
    }
  }
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>USerName</label>
          <input type="text" name="user" onChange={this.handleChange} /><br/>
          <label>Password</label>
          <input type="password" name="pass" onChange={this.handleChange}/><br/>
          <input type="submit" value="submit" />
          <input type="reset" value="reset" />
        </form>
        <br/>
        {this.state.msg}
      </div>
    )
  }
}

