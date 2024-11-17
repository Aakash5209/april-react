import { useEffect, useState } from "react";


const Counter = () =>{

    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("get api- get count val from db")
        // const res = get APi
        // setCount(res)
        

    },[])


    useEffect(()=>{
        console.log("calling POST Api to update the value of count in db")         

    },[count])



    const handelIncre=()=>{
      
        setCount(count+1) 
      
        // console.log("calling POST Api to update the value of count in db")      
    }

    const handelDecre=()=>{
        setCount(count-1)
        // console.log("calling POST Api to update the value of count in db") 
        
    }

    

    return (<>

    <h1>hey i m a counter !!!!</h1>
    <h2>Current count is - {count} </h2>

    <button onClick={handelIncre}>Increment</button> 
    <button onClick={handelDecre}>Decrement</button>

    <button onClick={()=>setCount(0)}>reset</button>
    
    </>)


}

export default Counter;