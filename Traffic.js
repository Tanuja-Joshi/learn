import React, {useEffect,useState} from 'react'
import '../App.css';
const  Traffic=()=> {
const [currentColor, setCurrentColor] = useState('red');
    useEffect(() => {
      const changeColor = () => {
        switch (currentColor) {
          case 'red':
            setCurrentColor('yellow');
            break;
          case 'yellow':
            setCurrentColor('green');
            break;
          case 'green':
            setCurrentColor('red');
            break;
          default:
            setCurrentColor('red');
        }};
      const intervalId = setInterval(() => {
        changeColor();
      }, 3000);
      return() => clearInterval(intervalId);
    }, [currentColor]);

    return (
      <div>
       <div> <h3 style={{textAlign:'center'}}>Traffic Signal</h3></div>
        <div className='traffic'>           
          <div className='red'style={{
            width: '80px',
            height: '80px',
            backgroundColor: currentColor === 'red' ? 'red' : 'rgba(255, 0, 0, 0.3)',
            borderRadius: '50%',
            }}></div>
          <div className='yellow'style={{
              width: '80px',
              height: '80px',
              backgroundColor: currentColor === 'yellow' ? 'yellow' : 'rgba(255, 255, 0, 0.3)',
              borderRadius: '50%',
            }}></div>
          <div className='green'style={{
              width: '80px',
              height: '80px',
              backgroundColor: currentColor === 'green' ? 'green' : 'rgba(0, 255, 0, 0.3)',
              borderRadius: '50%',
            }}></div>
        </div>
      </div>
    );}

export default Traffic
