import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import MyInvestments from "./pages/MyInvestments";
// import axios from "axios"
// import Card from "./Components/Card";
// import List from "./Components/List";
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"


// after successful log in
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/MyInvestments" component={MyInvestments} />
            <Route exact path="/WatchList" component={WatchList} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;