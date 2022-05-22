import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import { NoSidebarLayout } from "~/components/Layout";
import { Fragment } from "react";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile, layout: NoSidebarLayout },
    { path: "/search", component: Search, layout: Fragment },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };