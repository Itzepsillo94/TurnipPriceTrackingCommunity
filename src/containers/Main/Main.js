import React from 'react';
import Cards from './Cards'
import img from '../../img/ti_a.png'

const Main = () => {
    const populateCards = ()=>{
        
    }
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Nabos x DEVF</h1>
            </div>
            <div className="row">
                <Cards cbg={img} ctitle="Islas" ctext={['Nabosland: $400','Peaches: $400','Koopa: $400','Marios: $400','devf: $400']} 
                link={['#',"Ver mas islas"]} />
                <Cards cbg={img} ctitle="" ctext={''} />
            </div>
        </div>
    )
}

export default Main
