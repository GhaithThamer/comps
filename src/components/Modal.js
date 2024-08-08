
import { useEffect } from "react";
import ReactDOM from "react-dom"


function Modal({ onClose, children, actionBar }) {

    useEffect(()=>{
        document.body.classList.add("overflow-hidden")
        
        return(()=>{document.body.classList.remove("overflow-hidden")})
            },[])

    return ReactDOM.createPortal(
        <div>
            <div onClick={() => { onClose() }} className=" bg-gray-500 fixed inset-0 opacity-80">
                modal
            </div>
            <div className="fixed bg-white inset-20 p-4">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>
        , document.querySelector(".modalViewer"))

}

export default Modal