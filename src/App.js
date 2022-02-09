
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Study from './components/Study';
import Education2 from './components/Education2';
function App() {
  return (
    <div>
<BrowserRouter>
      {/* <Navbar/> */}
     
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/study" component={Study}></Route>
      <Route exact path="/Education2" component={Education2}></Route>
      </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
