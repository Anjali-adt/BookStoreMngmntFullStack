import "./App.css";
import Navbar from "./Components/Navbar";
import AddBook from "./Components/AddBook";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import EditBook from "./Components/EditBook";
import CoverPage from "./Components/CoverPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/addBook" element={<AddBook />}></Route>
        <Route path="home/editBook/:id" element={<EditBook />}></Route>
        <Route path="/" element={<CoverPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
