// Import Library
import { Route, Routes } from 'react-router-dom';

// Import Component
import Home from './home';

// Import Style
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
