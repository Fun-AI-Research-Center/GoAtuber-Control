import type {FC} from "react"
import {Col, Row} from "antd";
import {Configs1, Configs2} from "./configs.tsx";
import TitleInput from "../../../../../components/TitleInput.tsx";


const App : FC = () => {
    return (
        <>
            <Row style={{padding:"10px 0"}}>
                <Col span={5} className="textCenter">
                <span>
                    讯飞TTS结构
                </span>
                </Col>
                <Col span={19}>
                    {Configs1.map((item,index) =>{
                        return <TitleInput
                            propNames={item.propNames}
                            title={item.title}
                            label={item.label}
                            style={{padding:"5px 0"}}
                            updateUrl={item.updateUrl}
                            updatePropsName={item.updatePropsName}
                            frontIcon={item.frontIcon}
                            key={index}
                        ></TitleInput>
                    })}
                    {Configs2.map((item,index) =>{
                        return <TitleInput
                            propNames={item.propNames}
                            title={item.title}
                            label={item.label}
                            style={{padding:"5px 0"}}
                            updateUrl={item.updateUrl}
                            updatePropsName={item.updatePropsName}
                            frontIcon={item.frontIcon}
                            isNumber={item.isNumber}
                            key={index}
                        ></TitleInput>
                    })}
                </Col>
            </Row>
        </>
    )
}

export default App
