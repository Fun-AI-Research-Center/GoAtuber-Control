import type {FC} from "react";
import {Col, Row} from "antd";
import Configs from "./configs.tsx";
import TitleInput from "../../../../../components/TitleInput.tsx";


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
                    {Configs.map((item,index) =>{
                        return <TitleInput propNames={item.propNames}
                                           title={item.title}
                                           label={item.label}
                                           style={{padding:"5px 0"}}
                                           key={index}
                                           updateUrl={item.updateUrl}
                                           updatePropsName={item.updatePropsName}
                                           isPercent={item.isPercent}
                                           isNumber={item.isNumber}
                        ></TitleInput>
                    })}
                </Col>
            </Row>
        </>
    )
}

export default App