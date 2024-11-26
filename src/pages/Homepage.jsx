
// import { useState } from "react"
// const Homepage = () => {
//   //useState
   
//   const [fullName, setFullName] = useState("masengesho");

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="h-[30vh]">
//         <p></p>
//       <button className="bg-green-500 px-6 py-2 rounded-md" onClick={()=>setFullName('cadeau')}>change Name</button>
//       </div>
  

//     </div>
//   )
// }
// ;
// export default Homepage

import Button from "../components/Button"
import { useState } from "react"

const Homepage = () => {
  const[counter, setCounter] = useState(0)
  return (
    <div className="h-screen flex justify-center items-center">
<div className="h-[20vh]">
<Button bgColor= "bg-red-500" buttonText="-" onClick={()=>{setCounter(counter + 1);}}/>
<p className="text-center">{counter}</p>
<Button bgColor="bg-green-500" buttonText="+" onClick={()=>{setCounter(counter + 1);}}/>
    </div>
    </div>
  )
}

export default Homepage