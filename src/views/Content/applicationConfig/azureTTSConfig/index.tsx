import type {FC} from "react";
import {Col, Row} from "antd";
import Configs from "./configs.ts";
import TitleInput from "../../../../components/TitleInput.tsx";


const App : FC = () => {

    return (
        <>
            <Row style={{padding:"10px 0"}}>
                <Col span={5} className="textCenter">
                <span>
                    Azure 语音服务 TTS 配置文件
                </span>
                </Col>
                <Col span={19}>
                    {Configs.map(item =>{
                        return <TitleInput propNames={item.propNames} title={item.title} label={item.label} style={{padding:"5px 0"}}></TitleInput>
                    })}
                </Col>
            </Row>
        </>
    )
}

export default App