import React from "react";

import { Route, Routes } from "react-router";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import SupportScreen from "./Screens/SupportScreen/SupportScreen";
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen";
import { useState } from "react";
import ContactContextProvider from "./Context/ContactContext";
import ContactDetailContextProvider from "./Context/ContactDetailContext";

function App() {
  /* Si isDarkMode es true el contactItem.jsx debe tener un color de letra rojo
  (Acordate que podes transferir información entre componjentes por medio de las props) */
  return (
    <div>
      <Routes>
        <Route 
          element={<ContactContextProvider/>}>

          <Route 
            path="/" 
            element={
              <HomeScreen/>
          } 
          />
          <Route 
            path="/contact/:contact_id" 
              element={<ContactDetailContextProvider/>}
          >
                <Route
                  path="/contact/:contact_id"
                    element={
                      <ContactDetailScreen />
                  }
                />

          </Route>
        </Route>
          <Route 
            path="/contact" 
            element={
              <ContactScreen />
          } 
          />
          <Route 
            path="/support" 
            element={
              <SupportScreen />
          } 
          />
      </Routes>
    </div>
  )
}
export default App