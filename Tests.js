// import React, {useEffect,useState} from 'react'
// const Tests = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("Component rendered successfully");
//      }, []);
//   return (
// 	<div>
//   	<button onClick={() => setCount(count + 1)}>Click me</button>
//   	<p>You clicked {count} times</p>
// 	</div>
//   )}
// export default Tests
//----------------------------------------------------------------------------------------------
// import React from 'react'
// const Tests = () => {
//     const names = ["Brian", "Paul", "Krug", "Halley"];
//    const listItems = names.map((name) => <li>{name}</li>);
//   return (
//     <div>
//       <ul>{listItems}</ul>
//     </div>
//   )}
// export default Tests
//-----------------------------------------------------------------------------------------------
// import React from 'react'
// const Tests = () => {
//   return (
//     <div>
      
//     </div>
//   )}
// export default Tests
// ------------------------------------------------------------------------------------------------------------
// import React,{useState} from 'react'
// const Tests = () => {
//     const [value, setValue] = useState("");
//  function handleChange(event) {
// 	setValue(event.target.value);
//   }
//   return (
//     <div>
//      <input type="text" value={value} onChange={handleChange} />
//   	<p>You entered: {value}</p> 
//     </div>
//   )}
// export default Tests
// -----------------------------------------------------------------------------------------------------------------------
// import React,{useState} from 'react'
// const Tests = () => {
//     const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   )}
// export default Tests
// ------------------------------------------------------------------------------------------------------------------------
// import React,{useState,useEffect} from 'react'
// const Tests = () => {
//     const [data, setData] = useState([]);
//  useEffect(() => {
// 	const fetchData = async () => {
//   	const response = await fetch("/api/data");
//   	const json = await response.json();
//   	setData(json);
// 	};
// 	fetchData();
//   }, []);
//   return (
//     <div>
//       {data.map((d) => <p>{d.text}</p>)}
//     </div>
//   )}
// export default Tests
// ----------------------------------------------------------------------------------------------------------------------------------
import React,{useState} from 'react'
const Tests = () => {
    const [data, setData] = useState("hi");
     const onChangeEvent=(e)=>{
setData(e.target.value)
     }
  return (
    <div>
      <input value={data} onChange={onChangeEvent}/>
      <p>Value: {data}</p>
    </div>
  )}
export default Tests
