import React from 'react';
import Cards from './Cards'
import img from '../../img/bg_cardb.jpg'
import img2 from '../../img/daisy.png'
import img3 from '../../img/pred.png'


const Main = () => {
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Nabos x DEVF</h1>
            </div>
            <div className="row">
                <Cards head="Top Islas" cbg={img} ctitle="Islas" ctext={['Nabosland: $400','Peaches: $400','Koopa: $400','Marios: $400','devf: $400']} 
                link={['#',"Ver mas islas"]} />
                <Cards cbg={img2} ctext={''} render="form" />
                <Cards cbg={img3} ctext={''} render="grph" />
            </div>
        </div>
    )
}

export default Main
