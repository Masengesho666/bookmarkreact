
// import Bookmark from "./pages/Bookmark"
// function App() {
//   return (
//     <div>
//      <Bookmark/>
    
//     </div> 
//   )
// }

// export default App

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage"
// import NotFount from "./pages/NotFount"
// import Login from "./pages/Login"


const App = () => {

  return (

    <Homepage/>
  //   <Router>
  //     <Routes>
  //       {/* route to  Home */}
  // <Route path="/" element={<Homepage/>}/> 

  //    {/* route to  Login */}
  // <Route path="/Login" element={<Login/>}/> 

  //    {/* catch other routes that is not de */}
  // <Route path="*" element={<NotFount/>}/> 

  // </Routes>

  // </Router>
  )
}

export default App
