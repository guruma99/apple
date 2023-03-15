import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cards from "./components/Main/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
