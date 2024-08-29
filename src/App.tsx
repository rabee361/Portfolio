import './App.css'
// import About from './components/About';
import ExpenseTracker from './components/projects/expense-tracker/ExpenseTracker';
// import { Link } from 'react-router-dom';
// import Hero from './components/Hero';
// import RecentProjects from './components/RecentProjects';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import HomePage from './components/home/HomePage';
// import ExpenseTracker from './components/projects/ExpenseTracker';


const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App
