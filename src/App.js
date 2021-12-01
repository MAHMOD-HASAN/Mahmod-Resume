import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactMe from './Pages/Home/ContactMe/ContactMe';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import MyProjects from './Pages/Home/MyProjects/MyProjects';
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

         <Route path='/project'>
            <MyProjects></MyProjects>
         </Route>

         <Route path='/contact'>
            <ContactMe></ContactMe>
         </Route>

       </Switch>

       <Footer></Footer>

     </Router> 
  
  );
}

export default App;
