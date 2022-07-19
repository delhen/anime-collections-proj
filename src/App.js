import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import UserCollection from "./pages/UserCollection/UserCollection";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<UserCollection />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
