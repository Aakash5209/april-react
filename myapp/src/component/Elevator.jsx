import { useState } from "react"
import './elevator.css'

const Elevator = ()=>{

   const [currentFloor, setCurrentFloor] = useState(1)
   const [targetFloor, setTargetFloor] = useState(null)
   const [isMoving, setIsMoving] = useState(null)
   
   const floors = [1,2,3,4,5]


   const moveToFloor = (floor)=>{
    if(isMoving || floor === currentFloor) return
    
    setTargetFloor(floor)
    setIsMoving(true)

    const timeToMove = Math.abs(floor - currentFloor)*1000

    setTimeout(()=>{
        setIsMoving(false)
        setCurrentFloor(floor)

    },timeToMove)



   }
   console.log("ismoving",isMoving)

    return <>
    <div className="elevator-container">
        <div className="elevator-shaft">
            
            <div className={`elevator ${isMoving? 'moving' : ''}`}
            style={{bottom: `${(currentFloor -1)*20}%`}}
            
            >
                {isMoving?'Moving....': `Floor ${currentFloor}`}

            </div>
        </div>

        <div className="controls">
            {
                floors.map((floor=>(
                    <button key={floor} onClick={()=>moveToFloor(floor)} disabled={isMoving}>
                        {`Go to Floor ${floor}`}

                    </button>
                )))
            }

        </div>

    </div>

    </>
}


export default Elevator