import type {FC} from "react"
import TitleInput from "../../../components/TitleInput.tsx";
import baseUrl from "../../../constant/baseUrl.ts";

const App: FC = () => {

    return(
        <>
            <div style={{padding:"10px 0 ",background:"#F3F5F7"}}>
                <TitleInput
                    propNames={["listen","bilibili"]}
                    label="room_id" title="B站直播间房间号:"
                    updateUrl={baseUrl + "/bilibili"}

                ></TitleInput>
            </div>
        </>
    )
}

export default App