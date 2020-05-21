import React,{useState} from 'react';
import './LoginUser.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



const LoginUser = () => {

    const [name,setName] = useState('');
    const [passw,setPassw]= useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState('');
    const [id,setId]=useState('');
    
    const ID = 'user-2648a';
    const URL = `https://${ID}.firebaseio.com/user.json`;
/*    const[datos,setDatos] = useState({});
*/

    const handName = (e) => {
        //console.log(e.target.value);
        setName(e.target.value);
    }

    const handPassw = (e) =>{
        //console.log(e.target.value);
        setPassw(e.target.value);
    }

    const confirmData = () => {
        axios.get(URL)
        .then(({data})=>{
            console.log(data);
            
        })

        if(name.length > 0 && passw.length > 0){
            const body =[
                {name: "Kevin", password: "12345", id: "-M7jyRcOSTnGvFNTJGGQ"},
                {name: "Juan", password: "54321", id: "-M7jxujwNOoYpueGG0OL"},
                {name: "Roberto", password: "12345", id: "-M7tb6kxtkMCuo5FmRMM"}
            ]
            const nm = body.find(e => e.name === name);            
            
            //if(body.name === name && body.password === passw){
            if(nm.name === name && nm.password === passw){
                //alert(`Bienvenido ${name}`);
                setLoading(true);
                setId(nm.id);
            }else {
                setLoading(false);
                setError('Revise sus datos');
            }
        } else {
            setLoading(false);
            setError('LLenar campos');
            //alert("Informacion Invalida")
        }
    }

    return (

        <div className="login">
        <form>
            <div className="title">
            <h1>Login</h1>
            </div>
            <div className="form-group">
                <label  for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange= {handName} type="text" placeholder="example: Juan" value={name} id="text" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input onChange={handPassw} type="password" placeholder="12345" value={passw} id="inputPassword3"/>
                </div>
            </div>
            { loading
                ?   <div>
                        { /* Query parameters */ }
                        <Redirect to={`/user_1?user=${id}`}  />
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                :   <div>
                        <div className="text-danger">
                            {error}
                        </div>
                        <button onClick={() =>confirmData()} type="submit" className="btn btn-primary">Login</button>
                    </div>   
            }
        </form>
        </div>
    )
}

export default LoginUser;

/*

  <LoadUsers name={name} password={passw} />

            { loading
                ?   <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                        {console.log(2)
                        }
                    </div>
                :   
            }
    const confirmData = () => {
        if(name.length > 0 && passw.length > 0){
        const body={
            name: name,
            password: passw,
        }
        axios.get(URL+user.uid+'.json?auth=DATABASE-SECRET',body)
            .then(({data}) => setDatos(data))
            .catch(()=> {
                setError("Error de conexion");
            })
        }else{
            setError("Error de conexion");
        }
    }

            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>


                    { Object.keys(data).map((data) => 
                    <viewUsers
                        name: data.name
                        password: data.password
                    )}


*/