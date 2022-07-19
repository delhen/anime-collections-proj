import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
