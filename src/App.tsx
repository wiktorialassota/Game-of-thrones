import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import CharacterDetailPage from "./pages/characterDetailPage";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/Game-of-thrones/" element={<HomePage />} />
          <Route path="/Game-of-thrones/character/:id" element={<CharacterDetailPage />} />
        </Routes>
    </div>
  );
};

export default App;
