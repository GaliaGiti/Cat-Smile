import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./Components/About";
import Contacts from "./Components/Contacts";
import HomePage from "./Components/HomePage";
import LogIn from "./Components/LogIn";

import RegistrationPage from "./Components/RegistrationPage";
import PetInfo from "./Components/PetInfo";
import NavBar from "./Components/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HomePage />
        </>
      ),
    },

    {
      path: "/about",
      element: (
        <>
          <About />
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
        
          <Contacts />
        </>
      ),
    },
    {
      path: "/registrationpage",
      element: (
        <>
          
          <RegistrationPage />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <LogIn />
        </>
      ),
    },
  ]);

  return (
    <>
      <NavBar />

       <RouterProvider router={router} /> 
    </>
  );
}

export default App;
