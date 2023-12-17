// import { useState } from "react";
// import "./App.css";
// import Home from "./components/Home";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;
// src/App.tsx
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import store from "./config/Store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
