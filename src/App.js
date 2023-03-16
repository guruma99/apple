// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cards from "./components/Main/Cards";
import { Routes, Route, Link } from "react-router-dom";
import Sub1 from "./components/Sub1";
import Menu2 from "./components/Menu2";

function App() {
  return (
    <div className="App">
      {/* <Blog/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu1" element={<h1>menu1 페이지</h1>} />
        <Route path="/menu2" element={<Menu2 />} />
      </Routes>
      {/* <Main /> */}
      <Cards />
    </div>
  );
}

export default App;
