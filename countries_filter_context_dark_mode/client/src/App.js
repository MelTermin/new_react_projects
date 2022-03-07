
import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import Search from './components/Search';
import {CountriesProvider} from "./context/ContextApi"
function App() {
  return (
    <div className="App">
      <CountriesProvider>
        <Header/>
        <Search/>
        <CountriesList/>
      </CountriesProvider>


    </div>
  );
}

export default App;
