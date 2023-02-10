import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home.js";
import Index from "../Pages/Index.js";
import Show from "../Pages/Show.js";
import FourOFour from "../Pages/FourOFour.js";
import New from "../Pages/New.js";
import Edit from "../Pages/Edit.js";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bucketlist" element={<Index />} />
      <Route path="/bucketlist/:id" element={<Show />} />
      <Route path="/bucketlist/:id/edit" element={<Edit />} />
      <Route path="/bucketlist/new" element={<New />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/not-found" element={<FourOFour />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
