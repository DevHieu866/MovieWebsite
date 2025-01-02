import './css/App.css';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import{ Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContexts';

function App() {


  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/MovieWebsite" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App