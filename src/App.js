import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Error404 from './components/Error404';


function App() {
  return (<div className="App"><Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

    
        <Routes>
          <Route path="/users/*" element={<Users/>}/>
          
          <Route path="/about" element={<About/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<Error404/>}/>


            
        </Routes>
      </div>
    </Router>

    </div>
  );
}


export default App;
