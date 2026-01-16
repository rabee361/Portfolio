import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
