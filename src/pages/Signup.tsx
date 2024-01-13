import React from 'react'
import { ActionFunction, Form, redirect } from "react-router-dom";
import "../assets/styles/Signup.css";
const Signup: React.FC = () => {
  return (
    <div className="form">
      <Form method="POST">
        <label htmlFor="firstname">Firstname:</label>
        <br />
        <input type="text" id="firstname" name="firstname" /> <br />
        <label htmlFor="lastname">Lastname:</label>
        <br />
        <input type="text" id="lastname" name="lastname" /> <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" /> <br />
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" /> <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" /> <br />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};

export default Signup;

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const userData = {
    firstName: data.get("firstname"),
    lastName: data.get("lastname"),
    email: data.get("email"),
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.ok) {
      localStorage.setItem("authToken", "THISISDUMMYAUTHTOKENFORSIGNUPUSER");
      return redirect("/");
    }
  } catch (error) {
    console.log("please enter valid details");
    return redirect("/login");
  }
  return redirect("/login");
};