import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import { NoSidebarLayout } from "~/layouts";
import { Fragment } from "react";
import config from "~/configs";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: NoSidebarLayout },
    { path: config.routes.search, component: Search, layout: Fragment },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };