import Home from "./components/pages/Home";
import Inquiries from "./components/pages/Inquiries";
import Mission from "./components/pages/Mission";
import Shop from "./components/pages/Shop";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/contact-us">
        <Inquiries />
      </Route>
      <Route path="/mission">
        <Mission />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
