 
import react ,{ useEffect, useState } from "react"

function App() {
 
   

  return (
   
<div  style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"55.7vh"}}>
      <div  className="ui_abstergo">
  <div className="abstergo_loader" >
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div   className="ui_text"  >
    Loading  
    <div  className="ui_dot" ></div>
    <div  className="ui_dot" ></div>
    <div   className="ui_dot" ></div>
  </div>
</div>
    </div>
    
  )
  
}

export default App