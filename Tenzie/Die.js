import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
            
        >
     { props.value === 1 ?  
       <div  className = "dice first-face">
        <span className = "dot"> </span>
             </div> : <div></div>
     }
     { props.value === 2 ?
    <div className="dice second-face">
    <span className="dot"> </span>
    <span className="dot"> </span>
</div> : <div/>
     }
     { props.value === 3 ?
  <div className="dice third-face">
<span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>
</div> : <div/> }

{props.value === 4 ? <div className="fourth-face dice">
<div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
<div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div> : <div/>
}
{ props.value === 5 ?
    <div className="fifth-face dice">
  
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  
  <div className="column">
    <span className="dot"></span>
  </div>
  
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>
: <div/>
}
{props.value === 6 ? <div className="sixth-face dice">
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
        <span className="dot"></span>
  </div> </div> : <div/>}
            <h2 className="die-num">{props.dice}</h2>
   
        </div>
    )
}