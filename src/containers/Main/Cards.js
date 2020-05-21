import React from 'react'

const Cards = (props) => {
    const form = (parametro, url) => {
        if (parametro == "form")
            return (
            <form>
                <div className="form-group row">
                    <label for="pdom" className="col-sm-6 col-form-label">Compre en:</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="pdom" placeholder="99" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Lunes AM" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Lunes PM" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Martes AM" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Martes PM" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Miercoles AM" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Miercoles PM"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Jueves AM"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Jueves PM"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Viernes AM"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Viernes PM"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Sabado AM"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Sabado PM"/>
                    </div>
                </div>
            </form>);
        else {
            return (
                <img src={url} alt="Grafico bolsa" />
            )
        }
    }
    return (
        <div className="col-md-auto">
            <div className="card border-dark mb-3" style={
                props.render == "grph"
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
