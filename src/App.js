import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import AnimeList from "./pages/AnimeList/AnimeList";
import UserCollection from "./pages/UserCollection/UserCollection";
import CollectionDetail from "./pages/CollectionDetail/CollectionDetail";
import { AnimeWithCollectionContext, CollectionContext } from "./utils/Context";
import { initCollectionListObj } from "./utils/CommonHelper";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <CollectionContext.Provider value={initCollectionListObj('collection-list')}>
            <AnimeWithCollectionContext.Provider value={initCollectionListObj('anime-with-collections')}>
              <Routes>
                <Route path="/anime/:id" element={<AnimeDetail />} />
                <Route path="/collections" element={<UserCollection />} />
                <Route path="/collection/:id" element={<CollectionDetail />} />
                <Route path="/" element={<AnimeList />} />
              </Routes>
            </AnimeWithCollectionContext.Provider>
        </CollectionContext.Provider>
      </Container>
    </div>
  );
}

export default App;
