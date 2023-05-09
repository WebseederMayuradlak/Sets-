import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sets from "./Components/SETS/Sets";
import Blog from "./Components/SETS/Blog Page/Blog1";
import Blog2 from "./Components/SETS/Blog Page/Blog2"
import Blog3 from "./Components/SETS/Blog Page/Blog3"



function App() {
  return (
    <>

<div className="App">
     <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Sets />} />
          <Route exact path="/blog1" element={<Blog />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog3" element={<Blog3 />} />

        </Routes>
       </BrowserRouter>
     </div>
    </>
    
  );
}

export default App;
