import type {FC} from "react"
import {Tooltip} from "antd";
import React from "react";
import {QuestionCircleOutlined} from "@ant-design/icons";



type Props = {
    text:React.ReactNode
}

const App: FC<Props> = ({text}) =>{
    return(
        <>
            <Tooltip placement="top" title={text} >
                <QuestionCircleOutlined />
            </Tooltip>
        </>
    )
}

export default App