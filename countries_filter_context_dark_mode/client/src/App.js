
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CountriesProvider} from "./context/ContextApi"
function App() {
  return (
  <div className="App">
    <CountriesProvider>
        <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Detail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CountriesProvider>
  </div>
  );
}

export default App;
