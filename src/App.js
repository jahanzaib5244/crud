
import './App.css';
import Advance from './module/advanced'
import Menu from './module/menu'
import News from './module/news'
import Pages from './module/page'
import Permission from './module/permission'
import Roles from './module/role'
import User from './module/user'
import Dasboard from './module/dashboard'
import ResponsiveDrawer from "./components/appbar"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
       <ResponsiveDrawer />
  
       <Switch>
       <Route exact path="/">
        <Dasboard/>
        </Route>
        <Route exact path="/advance">
        <Advance/>
        </Route>
        <Route exact path="/menu">
        <Menu/>
        </Route>
        <Route exact path="/news">
        <News/>
        </Route>
        <Route exact path="/pages">
        <Pages/>
        </Route>
        <Route exact path="/permission">
        <Permission/>
        </Route>
        <Route exact path="/roles">
        <Roles/>
        </Route>
        <Route exact path="/user">
        <User/>
        </Route>


        </Switch>


      </Router>
    </div>
  );
}

export default App;
