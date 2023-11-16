
import './App.css';
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom';
import Admin from './components/Admin'
import Edite from './components/Edite'
import Reg from './components/Reg'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' Component={Admin}/>
        <Route  path='/edit/:id' Component={Edite}/>
        <Route  path='/reg' Component={Reg}/>
      </Routes>

    </div>
  );
}

export default App;
