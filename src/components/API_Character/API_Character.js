import React, { useState, useEffect } from 'react'
import axios from 'axios'



const API_Character = () => {
    const [gender, setgender] = useState('')
    const [birthday, setbirthday] = useState('')
    const [personality, setpersonality] = useState('')
    const [name, setname] = useState('')
    const [Texto, setTexto] = useState('')

    const ObtenerGitf = () => {
        setTexto(Math.round((Math.random() * 10)*(Math.random() * 9)))
        axios.get(`http://acnhapi.com/villagers/${Texto}`)
            .then(({ data }) => {
                console.log(data.name['name-sp'])
                setname(data.name['name-sp'])
                setgender(data.gender)
                setbirthday(data.birthday)
                setpersonality(data.personality)
                

            })
            .catch((err) => console.error(err))
    }


    return (
        <div>
            <div class="container">

                <br></br>
                <br></br>
                <div class= "button">
                    <button type="button" className="btn btn-lg btn-primary" onClick={ObtenerGitf}>RANDOM</button>
                </div>


                <div class='img row'>
                <br></br>
                <br></br>
                    <img src={`http://acnhapi.com/icons/villagers/${Texto}`} />
                <div className= "text">
                    
                <h2>Name : {name}</h2>
                <h2>Gender : {gender}</h2>
                <h2>Birthday : {birthday}</h2>
                <h2>Personality : {personality}</h2>
                
                </div>
                </div>



            </div>

        </div>
    )
}

export default API_Character
