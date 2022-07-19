import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import AnimeList from "./pages/AnimeList/AnimeList";
import UserCollection from "./pages/UserCollection/UserCollection";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/collections" element={<UserCollection />} />
          <Route path="/" element={<AnimeList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
