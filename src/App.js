import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Services from './Services';
import Products from './Products';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
import Consulting from './Consulting';
import Marketing from './Marketing';
import Design from './Design';
import Development from './Development';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
     
      <Route path = '/services' exact component = {Services}/> 
      <Route path = '/products' exact component = {Products}/> 
      <Route path = '/contact-us' exact component = {ContactUs}/> 
      <Route path = '/sign-up' exact component = {SignUp}/> 
      <Route path = '/marketing' exact component = {Marketing}/> 
      <Route path = '/consulting' exact component = {Consulting}/> 
      <Route path = '/development' exact component = {Development}/>
      <Route path = '/design' exact component = {Design}/>
    </Switch>
    </Router>
    
  );
}

export default App;
