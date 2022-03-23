import {UserProvider} from "./context/ContextApi"
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <Header/>
      <Home/>
    </UserProvider>
  );
}

export default App;
