import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Juicy Burger</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
