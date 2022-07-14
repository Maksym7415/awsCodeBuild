import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
