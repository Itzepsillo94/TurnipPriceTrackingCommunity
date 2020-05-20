import React from 'react'

const Cards = (props) => {
    return (
        <div className="col-md-auto">
            <div className="card border-dark mb-3" style={{width: 18 +"rem"}}>
                <img src={props.cbg} className="card-img-top" alt="text" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.ctitle}</h5>
                      <br />
                      {props.ctext.length != ''
                        ? props.ctext.map(texto => <p className="card-text">{texto}</p>)
                        : <p className="text-center">No hay datos!</p>
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
