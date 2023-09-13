import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProctedRoute from "./componenets/Routes/ProctedRoute";
import PublicRoute from "./componenets/Routes/PublicRoute";

import Donar from "./pages/Dashboard/Donar";
import Hospital from "./pages/Dashboard/Hospital";
import Organization from "./pages/Dashboard/Organization";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/donar-list"
          element={
            <ProctedRoute>
              <DonarList />
            </ProctedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProctedRoute>
              <HospitalList />
            </ProctedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProctedRoute>
              <OrgList />
            </ProctedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProctedRoute>
              <AdminHome />
            </ProctedRoute>
          }
        />
        <Route
          path="/organization"
          element={
            <ProctedRoute>
              <Organization />
            </ProctedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProctedRoute>
              <Donation />
            </ProctedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProctedRoute>
              <Consumer />
            </ProctedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProctedRoute>
              <Donar />
            </ProctedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProctedRoute>
              <Analytics />
            </ProctedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProctedRoute>
              <Hospital />
            </ProctedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProctedRoute>
              <HomePage />
            </ProctedRoute>
          }
        />
        {/* will set on homepage */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
