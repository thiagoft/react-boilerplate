import React, {Component} from "react";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import '../../css/login.css';

const paperStyle = {
    padding: 20,
    height: 270,
    width: 350,
    textAlign: 'center',
    display: 'inline-block',
  };

  
export default class Login extends Component {

    constructor() {
        super();
        this.state = {msg:""};
    }

    login() {
        const requestInfo = {
            method:'POST',
            body:JSON.stringify(
                {
                    username:this.username.input.value,
                    password:this.password.input.value
                }),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };

        fetch("http://localhost:8080/auth",requestInfo)
            .then(response => {
                if (response.ok) {
                    this.setState({msg:""});
                    return response.text();
                } else {
                    throw new Error("Invalid username/password.");
                }
            })
            .then(token => {
                localStorage.setItem("auth-token",token);
                this.props.history.push("/main");
            })
            .catch(error => {
                console.log(error);
                this.setState({msg:error.message});
            });
    }
      
    render() {
        return (
            <div className="login-box">
                <Paper style={paperStyle} zDepth={2} rounded={false} >
                    <span className="error-msg" >{this.state.msg}</span>
                    <br/>
                    <TextField
                        hintText="username"
                        floatingLabelText="Username"
                        ref={(input) => this.username = input} />
                    <br/>
                    <TextField
                        hintText="password"
                        floatingLabelText="Password"
                        type="password"
                        ref={(input) => this.password = input} />
                    <br/>
                    <br/>
                    <RaisedButton label="Login"
                        onClick={() => this.login()}
                        primary={true} />
                </Paper>
            </div>
        );
    }
}