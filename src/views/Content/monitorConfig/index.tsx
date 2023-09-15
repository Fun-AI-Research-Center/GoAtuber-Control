import type {FC} from "react"
import TitleInput from "../../../components/TitleInput.tsx";

const App: FC = () => {

    return(
        <>
            <div style={{padding:"10px 0 ",background:"#F3F5F7"}}>
                <TitleInput propNames={["listen","bilibili"]} label="room_id" title="B站直播间房间号:"></TitleInput>
            </div>
        </>
    )
}

export default App