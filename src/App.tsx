import { Route, Routes } from "react-router-dom";
import JoinPage from "./screens/JoinPage";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Archive from "./screens/Archive";


function App() {
  return (
    
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
