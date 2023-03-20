import React from "react";
import config from "@/configs";
// Layout
import MainLayout from "../layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";

// Pages
import RootPage from "@/pages";
import Login from "@/pages/Login";
const Equipment = React.lazy(() => import("@/pages/Device"));
const Profile = React.lazy(() => import("@/pages/Profile"));
const Report = React.lazy(() => import("@/pages/Report"));
const Service = React.lazy(() => import("@/pages/Service"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
const ForgotPass = React.lazy(() => import("@/pages/ForgotPass"));
const ResetPass = React.lazy(() => import("@/pages/ResetPass"));
const NumericalOrder = React.lazy(() => import("@/pages/NumericalOrder"));
const AddDevice = React.lazy(() => import("@/pages/Device/AddDevice"));
const DetailDevice = React.lazy(() => import("@/pages/Device/DetailDevice"));
const UpdateDevice = React.lazy(() => import("@/pages/Device/UpdateDevice"));

export const routes = [
    { path: config.routes.home, component: RootPage, layout: null },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.forgotPass, component: ForgotPass, layout: null },
    { path: config.routes.resetPass, component: ResetPass, layout: null },
    {
        path: config.routes.dashboard,
        component: Dashboard,
        layout: SecondaryLayout,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: MainLayout,
    },
    {
        path: config.routes.device,
        component: Equipment,
        layout: MainLayout,
    },
    {
        path: config.routes.service,
        component: Service,
        layout: MainLayout,
    },
    {
        path: config.routes.numberOrder,
        component: NumericalOrder,
        layout: MainLayout,
    },
    { path: config.routes.report, component: Report, layout: MainLayout },
    {
        path: config.routes.addDevice,
        component: AddDevice,
        layout: MainLayout,
    },
    {
        path: config.routes.detailDevice,
        component: DetailDevice,
        layout: MainLayout,
    },
    {
        path: config.routes.updateDevice,
        component: UpdateDevice,
        layout: MainLayout,
    },

];
