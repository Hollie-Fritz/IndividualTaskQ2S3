import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PersistResForm from "./PersistRes/PersistResForm";
import ResInfo from "./ResInfo";
import ResMenu from "./ResMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<ResInfo />} />
    //     <Route path="/ResMenu/" element={<ResMenu />} />
    //   </Routes>
    // </BrowserRouter>
    <div className="App">
      <PersistResForm />
    </div>
  );
}
export default App;
