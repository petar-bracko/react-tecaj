import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import {
  About,
  Forms,
  Home,
  Login,
  Pokemon,
  ReduxConsumers,
  ZustandConsumer,
} from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/redux" element={<ReduxConsumers />} />
        <Route path="/zustand" element={<ZustandConsumer />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
