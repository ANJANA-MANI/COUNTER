import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
function Counter() {
  const [counter,setCounter]=useState(0);
  function increment()
  {
    setCounter(counter+1)
  }
  function decrement()
  {
    if(counter!=0)
    {
      setCounter(0)
    
      setCounter(counter-1)
    }
  
  }
  function reset()
  {
    setCounter(0)
  }
  return (
    <div class="text-center mt-5"style={{position:'relative'}}>
      <div style={{position:'absolute',marginLeft:"622px",width:"113px",height:"50px",marginTop:"142px"}} > 
      <button style={{backgroundColor:"#D5D8DC",border:"3px solid #17202A",color:"#17202A "}} type="button" class="btn btn m-1 fs-5 p-1 "data-mdb-ripple-init onClick={increment}>+</button>
      <button style={{backgroundColor:"#D5D8DC",border:"3px solid #17202A",color:"#17202A "}} type="button" class="btn btn m-1 fs-5 p-1"data-mdb-ripple-init onClick={decrement}>-</button>
      <button style={{backgroundColor:"#D5D8DC",border:"3px solid #17202A",color:"#17202A "}}  type="button"class="btn btn m-1 fs-5 p-1"data-mdb-ripple-init onClick={reset}>0</button>
      
</div>
      <div style={{backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/6357/6357834.png')`,width:"300px",height:"200px",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",marginLeft:"40%"}}>
  <div style={{position:'absolute',marginLeft:"80px",width:"111px",height:"49px",backgroundColor:"#D6EAF8 ",marginTop:"75px"}} > <h1 style={{color:"#17202A"}}>{counter}</h1></div>
 
</div>


     
      </div>
      
  )
}

export default Counter