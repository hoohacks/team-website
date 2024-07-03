import { Route, Routes } from 'react-router-dom';
import JoinPage from './screens/JoinPage';

function App() {
  return (
    <Routes>
      <Route path='/join' element={<JoinPage/>}></Route>
    </Routes>
  );
}

export default App;
