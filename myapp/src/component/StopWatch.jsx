import { useEffect, useState } from "react"


const StopWatch = ()=>{

    const [time,setTime] = useState(0)

    const [isRunning, setIsRunning] = useState(false)

    
    useEffect(()=>{
        console.log("hi i m runnig")
        let timerId;
      if(isRunning){
        timerId =  setInterval(()=>{
            setTime((prev)=>prev+10)

        },10)
      }
      else{
        clearInterval(timerId)

      }

      return ()=> clearInterval(timerId)
    },[isRunning])



    const handleStart = ()=>{
        setIsRunning(true)


    }
    const handleStop = ()=>{
        setIsRunning(false)
        
    }

    const formatTime =(time)=>{
        const ms = `0${(time%1000)/10}`.slice(-2)
        const sec = `0${Math.floor(time/1000)%60}`.slice(-2)
        const min = `0${Math.floor(time/60000)%60}`.slice(-2)

        return `${min} : ${sec} : ${ms}`
    }


    return<>
    <h1>Stop watch</h1>
    <h2>current time - {formatTime(time)}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>
}

export default StopWatch