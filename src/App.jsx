import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personalised-trips" element={<div />} />
          <Route path="/corporate-trips" element={<div />} />
          <Route path="/group-trips" element={<div />} />
          <Route path="/blogs" element={<div />} />
          <Route path="/about" element={<div />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
