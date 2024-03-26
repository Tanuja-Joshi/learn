import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Basic = () => {
    const [fetch,setFetch]=useState([])
    const fetchData=async()=>{
        const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
        setFetch(response.data)
    }
    useEffect(()=>{
    fetchData()
    },[fetch])
  return (
    <div>
      {fetch.map((f)=>(
        <li key={f.id}>{f.id}<br/>
           title= {f.title}<br/>
           body= {f.body}<br/>
        </li>
      ))}
    </div>
  )
      }

export default Basic
