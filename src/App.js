import {BrowserRouter as  Router, Route,Routes} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Comparison from "./pages/Comparison";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
        <Route  exact path="/comparison"  element={<Comparison />}></Route>
        <Route  path="*" element={<NotFound />}></Route>

    </Routes> 
    </Router>
  </>
  );
}

export default App;
