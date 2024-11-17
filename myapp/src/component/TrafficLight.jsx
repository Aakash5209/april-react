import { useState } from 'react'
import './traffic.css'
import { useEffect } from 'react'


const TrafficLight = ()=>{

    const [currentLight, setCurrentLight] = useState('red')

    useEffect(()=>{
        let intervalId =setInterval(()=>{
            console.log("i m fire")
            setCurrentLight((prevLight)=>{
                if(prevLight === 'red') return "yellow"
                if(prevLight === 'yellow') return 'green'
                // if(prevLight === 'green') return 'red'
                return 'red'
            })

        },2000)

        return ()=>clearInterval(intervalId)
    },[])

    console.log("currentLight",currentLight)



    return <>
    <h1>Traffic light</h1>
    <div className='signal-light'>
        <div className={`circle red ${currentLight==='red'?'active':''}`}></div>
        <div className={`circle yellow ${currentLight==='yellow'?'active':''}`}></div>
        <div className={`circle green ${currentLight==='green'?'active':''}`}></div>
      

    </div>
    </>
}

export default TrafficLight