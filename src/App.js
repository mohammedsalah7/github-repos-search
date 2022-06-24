import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Comparison from "./pages/Comparison";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReposProvider from "./Context";

function App() {
  return (
    <>
      <ReposProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/comparison" element={<Comparison />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ReposProvider>
    </>
  );
}

export default App;
