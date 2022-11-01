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
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
