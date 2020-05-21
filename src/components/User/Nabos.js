import React from 'react'

function Nabos(props) {
    return (
        <form>
                <div className="form-group row">
                    <label htmlFor="pdom" className="col-sm-6 col-form-label">Compre en:</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="pdom" placeholder={props.d[0]} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[1]} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[2]} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[3]} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[4]}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[5]} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[6]}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[7]}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[8]}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[9]}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[10]}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[11]}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder={props.d[12]}/>
                    </div>
                </div>
            </form>
    )
}

export default Nabos
