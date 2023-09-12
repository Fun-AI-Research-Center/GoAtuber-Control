import type {FC} from "react"
import {Outlet} from "react-router-dom";

const App: FC = () => {
    return <>
   <Outlet></Outlet>
    </>
}

export default App