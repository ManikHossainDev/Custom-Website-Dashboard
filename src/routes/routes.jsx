import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import SignIn from "../page/Auth/SignIn/SignIn";
import Otp from "../page/Auth/Otp/Otp";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
// import AdminRoutes from "./AdminRoutes";
import DashboardPage from "../page/Dashboard/DashboardPage";
import UserPage from "../page/user/UserPage";
import PrivacyTermsPage from "../page/PrivacyTermsPage/PrivacyTermsPage";
import PersonalInfoPage from "../page/PersonalInfoPage/PersonalInfoPage";
import PropertyPage from "../page/PropertyPage/PropertyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes >
      <MainLayout />
      // </AdminRoutes>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "property",
        element: <PropertyPage />,
      },
      {
        path: "settings", 
        children: [
          {
            path: "privacy-terms",  
            element: <PrivacyTermsPage />,
          },
          {
            path: "personal-info",  
            element: <PersonalInfoPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
