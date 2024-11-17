import { useEffect, useState } from "react"

const AutomaticGenerateOtp = () =>{

    const [otp, setOtp] = useState('')
    const [counter, setCounter] = useState(20)

    const generateOtp = ()=>{
        const newOtp = Math.floor(1000 + (Math.random() * 9000))
        setOtp(newOtp)
    }

    useEffect(()=>{
        generateOtp()
        let intervalId1 = setInterval(()=>{
            generateOtp()
            setCounter(20)


        },20000)

        let intervalId2 = setInterval(()=>{
            setCounter((prev)=>prev>0?prev-1:prev)

        },1000)

        return ()=>{
            console.log("i m clean up")
            clearInterval(intervalId1)
            clearInterval(intervalId2)

        }
    },[])

    return <>
    <h1>your otp is - {otp} </h1>
    <h2>New Otp in - {counter} </h2>
    </>

    
}

export default AutomaticGenerateOtp