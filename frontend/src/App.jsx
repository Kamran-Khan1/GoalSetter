import Dashboard from "./pages/Dashboard.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout.jsx";
import ProtectRoute from "./utils/ProtectRoute.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
