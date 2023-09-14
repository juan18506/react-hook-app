import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />


      <Routes>
        <Route path="/react-hook-app/" element={ <HomePage /> } />
        <Route path="/react-hook-app/about" element={ <AboutPage /> } />
        <Route path="/react-hook-app/login" element={ <LoginPage /> } />

        <Route path="/react-hook-app/*" element={ <Navigate to="/react-hook-app/about" /> } />
      </Routes>
    </>
  )
}
