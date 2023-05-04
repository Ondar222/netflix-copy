import React from "react"

const Modal = () => {
  
  const [open, setOpen] = React.useState(false)
  return (

 <div className="overlay">
        <div className="modal">
        <div>
          <svg className="modal__close" onClick={() => setOpen(false)} height="85" viewBox="0 0 200 200" width="85">
        
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </div>
        <div>
         
        </div>
        </div>
      </div> 
  )

}

export default Modal