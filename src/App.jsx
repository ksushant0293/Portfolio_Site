import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="appDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
