import { useContextProvider } from "./Provider/Provider";
import RouteComponent from "./Components/RouteComponent";
import ScrollButton from "./Components/ScrollButton";

import "./App.css";

function App() {
  const { theme } = useContextProvider();

  return (
    <div className={`App ${theme}`}>
      <RouteComponent />
      <ScrollButton />
    </div>
  );
}

export default App;
