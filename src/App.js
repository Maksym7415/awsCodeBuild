import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import PrivateRouter from "./PrivateRouter";


function App() {

  localStorage.removeItem('@awsToken')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <PrivateRouter>
                <Home/>
              </PrivateRouter>
            }
          />
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
