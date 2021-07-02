import React from "react";
import TaskBoard from "./containers/Taskboard/index";
import SignUp from "./components/layouts/signup";
import Login from "./components/layouts/login";
const routes = [
    {
        path: "/works",
        exact: true,
        component: () => <TaskBoard />,
    },
    {
        path: "/login",
        exact: false,
        component: () => <Login />,
    },
    {
        path: "/signup",
        exact: false,
        component: () => <SignUp />,
    },
];

export default routes;
