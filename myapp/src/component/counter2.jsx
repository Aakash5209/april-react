import { useEffect, useState } from "react";


const Counter2 = () =>{

    // const [count, setCount] = useState(()=>{
    //     const saveCnt = parseInt(localStorage.getItem('cnt'))
    //     return saveCnt ? saveCnt : 0

    // })


    const [count, setCount] = useState(()=> parseInt(localStorage.getItem('cnt'))?parseInt(localStorage.getItem('cnt')):0)

    useEffect(()=>{

    },[])





       

    

   





    useEffect(()=>{
        localStorage.setItem('cnt',count)
        console.log("update in LS")
        

    },[count])

    const handelIncre=()=>{
      
        setCount(count+1) 
    }

    const handelDecre=()=>{
        setCount(count-1)
        
    }

    

    return (<>

    <h1>hey i m a counter !!!!</h1>
    <h2>Current count2 is - {count} </h2>

    <button onClick={handelIncre}>Increment</button> 
    <button onClick={handelDecre}>Decrement</button>

    <button onClick={()=>setCount(0)}>reset</button>
    
    </>)


}

export default Counter2;