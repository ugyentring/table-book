import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./Hotels/NewHotel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNav />

        {/* Notification container (optional) */}
        <ToastContainer position="top-center" />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          {/*Private Routes*/}
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              exact
              path="/dashboard/seller"
              element={<DashboardSeller />}
            />
          </Route>

          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/hotels/new" element={<NewHotel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
