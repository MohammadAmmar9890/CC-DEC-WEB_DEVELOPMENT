import "./styles.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/HomePage";

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
