import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {button, Grid, Row, Col} from 'react-bootstrap'; 
import { convertToRaw } from 'draft-js';

// const rawContentState = convertToRaw(editorState.getCurrentContent());

// const markup = draftToHtml(
//   contentState, 
//   hashtagConfig, 
//   directional, 
//   customEntityTransform
// );

const style = {
margin: 12,
  };

class Render extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
        email: "",
        password: ""
        };

    }

    // handleChange = event => {
    //     this.setState({
    //     [event.target.id]: event.target.value
    //     });
    // }

    // handleSignup = event => {
    //     // event.preventDefault();
        
    //     fetch('http://localhost:8080/auth/signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({

    //         username: this.state.email,
    //         password: this.state.password,
    //     })
    //     }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    //     .then(tokenID => {
    //     // you can access your data here
    //         console.log(tokenID["token"])
    //     // save it to the local storage
    //         localStorage.setItem("tokenID", tokenID["token"]);
    //     // console.log(response.status);
    //     // console.log(response.json())
    //     })
    // }   

render() {
    // const { email, password } = this.state;
    // const enabled =
    // email.length > 0 &&
    // password.length > 0;

    return (
        <div style={{textAlign: 'center'}} >
            <div> p</div>
            {/* <TextField id="email" hintText="ID" value={this.state.email} onChange={this.handleChange}/><br />
            <TextField id="password" hintText="Password" value={this.state.password} onChange={this.handleChange}/><br />
            <RaisedButton label="Sign Up" style={style} disabled={!enabled} onClick={()=>{this.handleSignup() }}/> */}
        </div>
    );
}
}

export default Render