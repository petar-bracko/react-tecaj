import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About, Forms, Home, Login, Pokemon } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
