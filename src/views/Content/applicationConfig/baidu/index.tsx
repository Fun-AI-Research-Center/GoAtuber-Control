import type {FC} from "react"
import BaiduFilter from "./BaiduFilter";
import BaiduErnie from "./BaiduErnie";


const App : FC = () => {
    return (
        <>
            <BaiduErnie></BaiduErnie>
            <BaiduFilter></BaiduFilter>
        </>
    )
}

export default App
