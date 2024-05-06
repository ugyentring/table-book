//dependency import
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const TopNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" to="/">
        Home
      </Link>

      {auth !== null && (
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      )}

      {auth !== null && (
        <a className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
          Logout
        </a>
      )}

      {auth === null && (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
