import type {FC} from "react"
import {Outlet} from "react-router-dom";
import "./index.scss"

const App: FC = () => {
    return <>
   <div className="outer-box">
       <div className="inner-box">
           <Outlet></Outlet>
       </div>
   </div>
    </>
}

export default App