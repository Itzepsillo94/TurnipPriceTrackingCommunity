import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './User.css';

const User = () => {

    const ID = 'user-2648a';
    const URL = `https://${ID}.firebaseio.com/user.json`;

    const [name,setName] = useState('');
    const [lname,setLname] = useState('');
    const [passw,setPassw] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const history = useHistory();
    const nabo = 0;

    const handName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handLname = (e) => {
        console.log(e.target.value);
        setLname(e.target.value);
    }

    const handPassw = (e) => {
        console.log(e.target.value);
        setPassw(e.target.value);
    }

    const addUser = () => {
        setLoading(true);
        if(name.length > 0 && lname.length > 0 && passw.length > 0){
        const body = {
            name: name,
            last_name: lname,
            password: passw,
            nabo: nabo
        }
        axios.post(URL,body)
            .then(()=>{
                history.push('/');
            })
            .catch(() => {
                setError("Verificar Datos");
                setLoading(false);
            });
        }else{
            setError("Verificar Datos");
            setLoading(false);
        }
    }

    return (
        <div className="user">
        <form>
            <div className ="title">
            <h1>Create User</h1>
            </div>
            <div className="form-group">
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange={handName} value={name} placeholder="example: Juan" />
                </div>
            </div>
            <div className="form-group">
                <label for="name" className="col-sm-2 col-form-label">LastName</label>
                <div className="col-sm-10">
                    <input onChange={handLname} value={lname} type="text" placeholder="example: Lopez" id="text" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input onChange={handPassw} value={passw} type="password" placeholder="12345"  id="inputPassword3"/>
                </div>
            </div>
            <br/>
            <div className="text-danger">
                {error}
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
            { loading
                ?   <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                :   <button onClick={() => addUser()} type="submit" className="btn btn-primary">Crear</button>
                    
            }
                </div>
            </div>
                
        </form>
        </div>
    );
}

export default User;
