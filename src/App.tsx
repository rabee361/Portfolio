import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Blog from './pages/blog/Blog';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
