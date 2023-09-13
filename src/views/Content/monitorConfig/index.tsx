import type {FC} from "react"
import {Row} from "antd";

import TitleInput from "../../../components/TitleInput.tsx";

const App: FC = () => {

    return(
        <>
            <Row style={{padding:"10px 0 ",background:"#F3F5F7"}}>
                <TitleInput propNames={["listen","bilibili"]} label="room_id" title="B站直播间房间号:"></TitleInput>
            </Row>
        </>
    )
}

export default App