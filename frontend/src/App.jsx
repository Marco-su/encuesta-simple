import { ContextProvider } from "./contexts/Provider";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Navigation from "./components/navegacion";

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
