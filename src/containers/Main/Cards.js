import React, {useEffect, useState} from 'react'
import Nabos from '../../components/User/Nabos'
import axios from 'axios'

const Cards = (props) => {
    const dbnabos = "https://turnipsxdevf.firebaseio.com/nabos.json";
    const apirul = "https://api.ac-turnip.com/data/?f=";
    const [pnabos, setPnabo] = useState({});
    const [predicciones, setPredicciones] = useState([]);

    const getPnabos = () => {
        axios.get(`${dbnabos}?orderBy="userid"&startAt=1&endAt=1`)
        .then(({data})=>{
            //console.log(Object.keys(data));
            //Object.keys(data).map((item)=>(console.log(data[item])))
            setPnabo(data);
        })
        .catch((err) => console.log(err));
    }
    useEffect(()=>getPnabos(),[]);

    const getPredictions = (datos) =>{
        console.log(`Predict on: ${datos.precios}`);
        const precios = datos.precios.toString().replace(/,/g, "-");
        console.log(precios);
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.get(`${apirul}${precios}`)
        .then(({data}) => {
            console.log(`${data} <--`);
            setPredicciones(data.filter);
        })
        .catch((err) => console.log(err));
    }

    const form = (parametro, url) => {
        if (parametro === "form"){
            return (
                Object.keys(pnabos).map((nabo)=>(<Nabos id={nabo} d={pnabos[nabo]} />))
            );
        }else {
            Object.keys(pnabos).map((nabo)=>(getPredictions(pnabos[nabo])));
            console.log(predicciones);
            return (
                <img src={url} alt="Grafico bolsa" />
            )
        }
    }
    return (
        <div className="col-md-auto">
            <div className="card border-dark mb-3" style={
                props.render === "grph"
                ?  {width: "auto"}
                : {width: 18 +"rem"}}
            >
                <img src={props.cbg} className="card-img-top" alt="text" />
                <p style={{
                    fontWeight: "bold",
                    fontSize: 28,
                    color: "black",
                    position: "absolute", // child
                    top: 0, // position where you want
                    left: 0,
                    margin: 7
                }}>
                    {props.head}
                </p>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.ctitle}</h5>
                      {props.ctext.length != ''
                        ? props.ctext.map(texto => <p className="card-text">{texto}</p>)
                        : form(props.render, props.url)
                      }
                      {props.link &&   
                        <a href={props.link[0]} className="btn btn-primary">{props.link[1]}</a>                       
                      }
                </div>
            </div>
        </div>
    )
}

export default Cards
