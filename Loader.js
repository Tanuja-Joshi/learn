import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

const Loader = () => {
    const [load,setLoad]= useState([])
    const [spin,setSpin]=useState(true)
    // const loadData=async()=>{
    //     const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
    //     setLoad(response.data)
    //     setSpin(false)
    // }
    //using Promises
    const loadData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setLoad(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setSpin(false); // Update spin state to false once data fetching is complete
            });
    };
    useEffect(()=>{
        loadData()
    },[])
  return (
    <div>
     {spin?(<ReactLoading type="spin" color="#123abc" height={50} width={50} />):(
      load.map((l)=>(
        <li key={l.id}>
            {l.id}
            {l.title}
            {l.body}
        </li>
      )))}
    </div>
  )
}

export default Loader
