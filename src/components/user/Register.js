import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-lg">Create Account</button>
                </form>
            </div>
        )
    }
}

export default Register
