import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import LoginPage from "../pages/loginPage/LoginPage";
import LayoutComponent from "../components/layouts/LayoutComponent";
import FormComponent from "../pages/form/FormComponent";
import HomePage from "../pages/homePage/HomePage";
import Portfolio from "../pages/portfolio/Portfolio";
import FormCrud from "../pages/crudContoh/FormCrud";

import AboutMe from "../pages/aboutMe/AboutMe";
import { useNavigate } from "react-router-dom";
import FormHasura from "../pages/crudHasura/FormHasura";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormComponent />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/crud" element={<FormCrud />} />
            <Route path="/formhasura" element={<FormHasura />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/about-me/:id" element={<AboutMe />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
