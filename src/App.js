import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import AnimeList from "./pages/AnimeList/AnimeList";
import UserCollection from "./pages/UserCollection/UserCollection";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<AnimeList />} />
          <Route path="/collections" element={<UserCollection />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
