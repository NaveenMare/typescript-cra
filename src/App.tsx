import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledCompenents from "./pages/styledComponents";
import Home from "./pages/home";
import EmotionPage from "./pages/emotion";
import "./App.css";
import Sass from "./pages/sass/Sass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/emotion" element={<EmotionPage />}></Route>
          <Route
            path="/StyledComponents"
            element={<StyledCompenents />}
          ></Route>
          <Route path="/sass" element={<Sass />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
