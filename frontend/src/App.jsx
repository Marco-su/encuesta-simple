import { ContextProvider } from "./contexts/Provider";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Navigation from "./components/navegacion";
import "./assets/scss/App.scss";

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <Navigation />

        <main>
          <RoutesComponent />
        </main>
      </Router>
    </ContextProvider>
  );
}
