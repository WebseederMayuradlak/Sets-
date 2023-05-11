import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sets from "./Components/SETS/Sets";
import Blog1 from "./Components/SETS/Blog Page/Blog1";
import Blog2 from "./Components/SETS/Blog Page/Blog2"
import Blog3 from "./Components/SETS/Blog Page/Blog3"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>

<div className="App">
     <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Sets />} />
          <Route  path="/blog1" element={<Blog1 />} />
          <Route  path="/blog2" element={<Blog2 />} />
          </Routes>
        <ToastContainer/>
       </BrowserRouter>
     </div>
    </>
    
  );
}

export default App;
