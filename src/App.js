import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './Mainpage';
import Render from './Render';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={< Mainpage />}></Route>
    <Route exact path='/Render/:id' element={< Render />}></Route>
</Routes>
    </div>
  );
}

export default App;
