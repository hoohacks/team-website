import { Route, Routes } from "react-router-dom";
import JoinPage from "./screens/JoinPage";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/join" element={<JoinPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
