import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

export default function Provider({ children }) {
  const API = process.env.REACT_APP_API_URL;
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const [hidden, setHidden] = useState(true);
  // const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    axios
      .get(`${API}/bucketlist`)
      .then((res) => setList(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextData.Provider
      value={{
        API,
        axios,
        list,
        setList,
        theme,
        setTheme,
        // hidden,
        // setHidden,
        // trigger,
        // setTrigger,
      }}
    >
      <Nav />
      <Footer />
      {children}
    </ContextData.Provider>
  );
}
