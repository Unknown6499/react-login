import React,{useState, useEffect} from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './pages/RootLayout'
import Login from './pages/Login'
import Signup, { action as SignupAction } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { checkAuthLoader, tokenLoader } from "./utility/auth";
const App:React.FC = ()=>{
  const [authToken, setAuthToken] = useState<string | null>(null);
  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    setAuthToken(localToken);
  }, [authToken]);
 
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "tokenLoad",
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "dashboard",
          loader: checkAuthLoader,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
          action: SignupAction,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route}/>    </>
  )
}

export default App
