import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ResInfo from './ResInfo';
import ResMenu from './ResMenu';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (<BrowserRouter>
<nav>
  <div className="container mt-4">
  <div class="p-3 mb-2 bg-gradient-dark text-white">
    <Link to="/">ResInfo</Link>
  
    <Link to="/ResMenu/">ResMenu</Link>
    </div>
  </div>
</nav>
<Routes>
  <Route path="/" element={<ResInfo />} />
  <Route path="/ResMenu/" element={<ResMenu />} />
</Routes>
</BrowserRouter>)
}
export default App;