import React, { useEffect,useState } from 'react';
import './LoadUsers.css';
import axios from 'axios';

const LoadUsers = (props) => {

    const ID_KEY = 'user-2648a';


    const [name,setName]=useState('');
    const [nabo, setNabo]=useState('');
    const Tag = 'h1';

    useEffect(() => {
        //console.log(props.location.search.substr(6,));
        const key = props.location.search.substr(6,);
        const URL = `https://${ID_KEY}.firebaseio.com/user/${key}.json`;
        
        axios.get(URL)
        .then(({data})=>{
            setName(data.name);
            setNabo(data.nabo);
            
        })
        
    }, [])


    return (
        <div>
        <div className="title">
            <Tag>
                {`Hello, ${name}`}
            </Tag>
        </div>
        <div className="title">
            {`Nabos disponibles ${nabo}`}
        </div>
        </div>

    )
}

export default LoadUsers;

/*
            {`Hello, ${user.substr(6,)}`}
*/