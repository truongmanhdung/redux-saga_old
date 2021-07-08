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
        component: ({history}) => <Login history={history}/>,
    },
    {
        path: "/signup",
        exact: false,
        component: ({history}) => <SignUp history={history}/>,
    },
];

export default routes;
