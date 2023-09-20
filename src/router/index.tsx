import {createHashRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../error-page.tsx";
import NormalConfig from "../views/Content/normalConfig";
import MonitorConfig from "../views/Content/monitorConfig";
import ToolConfig from "../views/Content/toolConfig";
import Azure from "../views/Content/applicationConfig/azure";
import XunFei from "../views/Content/applicationConfig/xunfei";
import Baidu from "../views/Content/applicationConfig/baidu";


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
            },
            {
                path:"/azureConfig",
                element:<Azure></Azure>
            },
            {
                path:"/xunfei",
                element:<XunFei></XunFei>
            },
            {
                path:"/baidu",
                element:<Baidu></Baidu>
            }

        ],

    },
]);

export default router