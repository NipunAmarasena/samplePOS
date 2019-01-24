import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import {Register} from './Register';
import {Link} from 'react-router-dom';

export class Login extends Component {

    state = {
      User : {
        email : '',
        password : '',
        isLoggedIn : false
      }
    }
    render() {
        return (
           
            <div>
                <form className="container">
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" className="form-control" name="username" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                    <small id="emailHelp" className="form-text text-muted">Don't have an account? </small>
                   
                    <Link to="/register" ><button className="btn-btn-info btn-sm">Register</button></Link>
                    
               
            </div>
            
        )
    }
}

export default Login
