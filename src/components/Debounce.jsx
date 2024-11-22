import { useEffect, useState } from 'react';
import {useDebounce} from 'use-debounce'
function Debounce(){
    const [filter,setFilter]=useState('');
    const [value]=useDebounce(filter,1000);
    const [data,setData]=useState([]);
    useEffect(()=>{
       fetch(`https://swapi.dev/api/people?search=${filter}`)
       .then((res)=>res.json()).then((result)=>setData(result.results))
    },[value])
    return(
        <>
        <h1>Debounce</h1>
        <input type='text' value={filter} onChange={(e)=>setFilter(e.target.value)} />
        <ul>
            {data.map((user,index)=>{
                return <li key={index}>
                    {user.name}
                </li>
            })}
        </ul>
        </>
    )
}

export default Debounce;