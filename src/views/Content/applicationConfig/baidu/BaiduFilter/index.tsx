import type {FC} from "react"
import {Col, Row} from "antd";
import {Configs} from "./configs.ts";
import TitleInput from "../../../../../components/TitleInput.tsx";

const App : FC = () => {

    return (
        <>
            <Row style={{padding:"10px 0"}}>
                <Col span={5} className="textCenter">
                <span>
                   百度过滤服务配置
                </span>
                </Col>
                <Col span={19}>
                    {Configs.map((item,index) =>{
                        return <TitleInput
                            propNames={item.propNames}
                            title={item.title}
                            label={item.label}
                            style={{padding:"5px 0"}}
                            updateUrl={item.updateUrl}
                            updatePropsName={item.updatePropsName}
                            key={index}
                        ></TitleInput>
                    })}
                </Col>
            </Row>
        </>
    )
}

export default App
