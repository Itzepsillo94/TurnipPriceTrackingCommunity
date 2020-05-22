import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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

    const formRender = () => {
        const form = [];
        let id = 1;
        // Outer loop to create rows
        for (let a = 0; a < 6; a++) {
            let cols = []
            //Inner loop to create cols
            for (let b = 0; b < 2; b++) {
                cols.push(<div className="col">
                    <input id={id} type="number" className="form-control" defaultValue={props.d.precios[id]} onChange={(e)=>{refreshNabos(e,e.target.id)}}/></div>)
                id++
            }
            form.push(<div className="form-row">{cols}</div>)
        }
        return form
    }

    return (
        <form>
                <div className="form-group row">
                    <label htmlFor="pdom" className="col-sm-6 col-form-label">Compre en:</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="pdom" defaultValue={props.d.precios[0]} onChange={(e)=>{refreshNabos(e,0)}}/>
                    </div>
                </div>
                {formRender()}
                <br/>
                <a href={"#"} className="btn btn-primary" onClick={handleChange}>Calcular</a>
            </form>
    )
}

export default Nabos
