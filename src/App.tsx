import { Route, Routes } from "react-router-dom";
import JoinPage from "./screens/JoinPage";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Archive from "./screens/Archive";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Tailwind classes applied */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
