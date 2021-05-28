import "./index.scss"
import Header from "./components/header/index"
import Home from "./pages/Home/Home"
import Footer from "./components/footer/footer"
import Facilities from "./pages/Facilities/Facilities"
import Room from "./pages/Rooms/Room"
import Contact from "./pages/contact/Contact"
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/facilities" component={Facilities}/>
        <Route path="/Room" component={Room}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
