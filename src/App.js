import Home from "./components/pages/Home";
import Inquiries from "./components/pages/Inquiries";
import Mission from "./components/pages/Mission";
import Shop from "./components/pages/Shop";
import NavigationBar from "./components/general/NavigationBar";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/inquiries">
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
    </>
  );
}

export default App;
