import { Route, Routes } from "react-router-dom";
import JoinPage from "./screens/JoinPage";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
