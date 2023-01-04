import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

const App = React.lazy(() => import("./App"));
const Signup = React.lazy(() => import("./Pages/SignUp"));
const Login = React.lazy(() => import("./Pages/Login"));
const Error404 = React.lazy(() => import("./pages/error404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="loading ">
          <div className="text-info spinner-border"></div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
