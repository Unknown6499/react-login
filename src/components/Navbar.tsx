import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate,useRouteLoaderData } from 'react-router-dom'
import '../assets/styles/Navbar.css'
const Navbar:React.FC= () => {
  const token = useRouteLoaderData("tokenLoad") as string | null;
  const [login, setLogin] = useState<boolean>(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false)
    }
  }, [token]);
    const logOutHandler = () => {
      localStorage.removeItem("authToken");
      return navigate("/login");
  };
  
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!login && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {login && (
          <>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={logOutHandler} className="buttonsLogin">
                LogOut
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar