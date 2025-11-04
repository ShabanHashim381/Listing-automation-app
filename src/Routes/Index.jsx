import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";

import ListingReport from "../Pages/ListingReport/ListingReport";
import ListingDetail from "../Pages/Listing/ListingDetail/ListingDetail";
import Listing from "../Pages/Listing/Listing";
import Users from "../Pages/User/Users";
import JobConfig from "../Layout/JobConfig";
import Profile from "../pages/Profile/Profile";
import { useAuth } from "../Context/AuthContext";
import ThemeLoader from "../components/Ui/ThemeLoader";
import Login from "../Pages/Auth/Login";

export default function AppRoutes() {
  const { user, refreshLoading } = useAuth();

  if (refreshLoading) {
    return <ThemeLoader type="fullpage" message="Authenticating..." />;
  }

  return (
    <Routes>
      {/* --- Public Routes (Before Login) --- */}
      {!user && (
        <>
          <Route path="/login" element={<Login />} />
          s <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}

      {/* --- User Role Routes --- */}
      {user?.role === "user" && (
        <>
          <Route
            path="/listingReport"
            element={
              <MainLayout>
                <ListingReport />
              </MainLayout>
            }
          />
          <Route
            path="/listing/:asin"
            element={
              <MainLayout>
                <ListingDetail />
              </MainLayout>
            }
          />
          <Route
            path="/listing"
            element={
              <MainLayout>
                <Listing />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
          <Route
            path="/users"
            element={
              <MainLayout>
                <Users />
              </MainLayout>
            }
          />
          <Route path="*" element={<Navigate to="/listing" replace />} />
        </>
      )}

      {/* --- Admin Role Routes --- */}
      {user?.role === "admin" && (
        <>
          <Route
            path="/listingReport"
            element={
              <MainLayout>
                <ListingReport />
              </MainLayout>
            }
          />
          <Route
            path="/listing/:asin"
            element={
              <MainLayout>
                <ListingDetail />
              </MainLayout>
            }
          />
          <Route
            path="/listing"
            element={
              <MainLayout>
                <Listing />
              </MainLayout>
            }
          />
          <Route
            path="/users"
            element={
              <MainLayout>
                <Users />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
          <Route
            path="/job-config"
            element={
              <MainLayout>
                <JobConfig />
              </MainLayout>
            }
          />
          {/* <Route
            path="/settings"
            element={
              <MainLayout>
                <Settings />
              </MainLayout>
            }
          /> */}
          <Route path="*" element={<Navigate to="/listing" replace />} />
        </>
      )}
    </Routes>
  );
}
