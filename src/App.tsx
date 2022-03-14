import 'antd/dist/antd.css'
import { Routes, Route, } from "react-router-dom";
import { Home } from './views';
import './main.css'
import { NavBar } from './components/molecules';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
