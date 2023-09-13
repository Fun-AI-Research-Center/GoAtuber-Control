import {createHashRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../error-page.tsx";
import NormalConfig from "../views/Content/normalConfig";
import MonitorConfig from "../views/Content/monitorConfig";
import ToolConfig from "../views/Content/toolConfig";

const router = createHashRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/normalConfig",
                element: <NormalConfig></NormalConfig>,
            },
            {
                path:"/monitorConfig",
                element: <MonitorConfig></MonitorConfig>,
            },
            {
                path:"/toolConfig",
                element: <ToolConfig></ToolConfig>,
            }
        ],

    },
]);

export default router