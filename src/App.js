import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Header/Navigation';


function App() {
  return (
     <Router>

       <Navigation></Navigation>

       <Switch>

         <Route exact path='/'>
            <Home></Home>
         </Route>

         <Route path='/home'>
            <Home></Home>
         </Route>

       </Switch>

       <Footer></Footer>

     </Router> 
  
  );
}

export default App;
