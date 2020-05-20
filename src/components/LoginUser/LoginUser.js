import React from 'react';
import './LoginUser.css';

const loginUser = () => {
    return (
        <div className="login">
        <form>
            <div className="title">
            <h1>Login</h1>
            </div>
            <div className="form-group">
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="example: Juan"  id="text" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" placeholder="12345"  id="inputPassword3"/>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
                
        </form>
        </div>
    )
}

export default loginUser;

/*



*/