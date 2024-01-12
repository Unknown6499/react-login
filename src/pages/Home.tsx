import React from 'react'
import { useRouteLoaderData } from 'react-router'
import { NavLink } from 'react-router-dom';
import '../assets/styles/Home.css'
const Home: React.FC = () => {
  const token = useRouteLoaderData('tokenLoad') as string | null;
  return (
    <>
      <div className="home">
        {token && (
          <div>
            <h1>Welcome</h1>
            <p>Groove street, Home</p>
            <NavLink to="dashboard" style={{ color: "#222831" }}>Dashboard</NavLink>
          </div>
        )}
        {!token && (
          <div>
            <h1>Welcome</h1>
          <p>Ahh! Damn here we go again.</p>
            <p>Please Login to see the content</p>
            <NavLink to="login" style={{ color: "#222831" }}>
              Login
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Home