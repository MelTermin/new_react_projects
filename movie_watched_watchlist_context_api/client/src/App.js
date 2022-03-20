import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"
import WatchedList from "./components/WatchedList";
import WatchList from "./components/WatchList";
import { MovieProvider } from "./context/MovieProvider";
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Router>
          <Header/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/watchedList" element={<WatchedList />} />
          </Routes>
        </Router>
      </MovieProvider>
    </div>
  );
}

export default App;
