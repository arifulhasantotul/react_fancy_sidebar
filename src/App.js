import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

function App() {
   return (
      <>
         <Router>
            <Navbar></Navbar>
            <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>
               <Route path="/home">
                  <Home></Home>
               </Route>
               <Route exact path="/shop">
                  <Shop></Shop>
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
