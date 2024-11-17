import { useState } from "react";

const Login = ({name, address})=>{
    
    // const [count,setCount] = useState(12)

    const obj = {
        count:20
    }



    return(
        <div>
        <h1>hiii i m login page for - {name} which is living in -{address}</h1>

        <h2>here is ur - {obj.count} </h2>

        </div>
    )
   

  
}

export default Login;