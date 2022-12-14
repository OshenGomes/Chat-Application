import './App.css';
import Navigation from "./components/Navigation";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/chat" element={<Chat/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
