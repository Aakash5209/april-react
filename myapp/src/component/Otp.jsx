
import React, {useEffect, useState} from "react"
const Otp = ()=>{

    const [otp, setOtp] = useState('')

    useEffect(()=>{
        handleOtp()
    },[])

    const handleOtp =()=>{
        const newOtp = Math.floor(1000+ (Math.random() * 9000))
        setOtp(newOtp)
    }



    return<>
    <h1> here is ur otp- {otp}</h1>
    <button onClick={handleOtp}>Generate Otp</button>

    
    </>


}

export default Otp