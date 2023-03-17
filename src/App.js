// import logo from './logo.svg';
// import './App.css';
import Reg from './Reg';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>   
      
      <nav>
        <Routes>
            <Route path='Register' element={<Reg/>}></Route>
            <Route path='/' element={<Login/>}></Route>
        </Routes>
    </nav>
    
      </BrowserRouter>

      {/* <Reg /> */}
    </div>
  );
}

export default App;
