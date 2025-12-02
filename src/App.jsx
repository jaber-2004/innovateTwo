import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";
import Error from "./components/pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
