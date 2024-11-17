import { useState } from "react"
import './modal.css'


const Modal = ()=>{

    const [isOpen, setIsOpen ]  = useState(false)

   

    return <>
    <h1>hey i m modal</h1>
    <div className="modal-conatiner">
        <button className="btn-open" onClick={()=>setIsOpen(true)}>
            open Modal
        </button>
        {
            isOpen && (<>
            <div className="modal-overlay" onClick={()=>setIsOpen(false)}>
                <div className="modal"  onClick={(e)=>e.stopPropagation()}>
                    <h2>Title - modal is open </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam!</p>

                    <button className="btn-close" onClick={()=>setIsOpen(false)}> close Modal</button>

                </div>

            </div>
            </>)
        }

    </div>
    </>
}
export default Modal