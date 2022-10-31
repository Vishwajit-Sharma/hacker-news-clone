import './App.css';
import HomePage from './Components/HomePage';
import {Routes, Route} from 'react-router-dom'
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
