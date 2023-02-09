import { Routes, Route, Navigate } from "react-router-dom";
// import { useContextProvider } from "../Provider/Provider.js";
import Home from "../Pages/Home.js";
import Index from "../Pages/Index.js";

export default function RouteComponent() {
  // const { hidden } = useContextProvider();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bucketlist" element={<Index />} />
      {/* <Route path="/snacks/:id" element={<Show />} /> */}
      {/* <Route path="/snacks/:id/edit" element={<Edit />} /> */}
      {/* <Route path="/snacks/new" element={<New />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/not-found" element={<FourOFour />} /> */}
      {/* {hidden?<></>:<Route path="/P0i$0n" element={<Hidden />} />} */}
      {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
    </Routes>
  );
}
