import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

let router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "about", Component: About },
]);

export default router;
