import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Nabos(props) {
    const historia = useHistory();
    const [precio, setPrecio] = useState(props.d.precios);
    const handleChange = (event) => {
        const body = {};
        body[props.id] =
        {
            precios: precio,
            userid: props.d.userid
        }

        axios.patch('https://turnipsxdevf.firebaseio.com/nabos.json',body).then(data => setPrecio(precio)).then(historia.push("/"))
    }
    const refreshNabos = (event,idx) => {
        console.log(`Valor precambio: ${precio} y indice ${idx}`)
        precio[idx]=event.target.value;
        console.log(`Cambiado a: ${precio} y indice ${idx}`)
    }

    useEffect(()=>{
        history.push('/');
        console.log(1);
        
    },handleChange);

    return (
        <form>
                <div className="form-group row">
                    <label htmlFor="pdom" className="col-sm-6 col-form-label">Compre en:</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="pdom" defaultValue={props.d.precios[0]} onChange={(e)=>{refreshNabos(e,0)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[1]} onChange={(e)=>{refreshNabos(e,1)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[2]} onChange={(e)=>{refreshNabos(e,2)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[3]} onChange={(e)=>{refreshNabos(e,3)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[4]} onChange={(e)=>{refreshNabos(e,4)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[5]} onChange={(e)=>{refreshNabos(e,5)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[6]} onChange={(e)=>{refreshNabos(e,6)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[7]} onChange={(e)=>{refreshNabos(e,7)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[8]} onChange={(e)=>{refreshNabos(e,8)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[9]} onChange={(e)=>{refreshNabos(e,9)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[10]} onChange={(e)=>{refreshNabos(e,10)}}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[11]} onChange={(e)=>{refreshNabos(e,11)}}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" defaultValue={props.d.precios[12]} onChange={(e)=>{refreshNabos(e,12)}}/>
                    </div>
                </div>
                <br/>
                <a href={"#"} className="btn btn-primary" type="submit" onClick={handleChange}>Calcular</a>
            </form>
    )
}

export default Nabos
