import {createHashRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../error-page.tsx";
import NormalConfig from "../views/Content/normalConfig";


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
        ],

    },
]);

export default router