import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import CharacterDetailPage from "./pages/characterDetailPage";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
    </div>
  );
};

export default App;
