import type {FC} from "react"
import {Col, Row} from "antd";
import "./index.scss"
import ConfigRadioGroup from "../../../components/ConfigRadioGroup.tsx";
import TitleSwitch from "../../../components/TitleSwitch.tsx";
const ConfigItems = [
    {
        title:"选择嵌入服务",
        ConfigItem:{
            propName: ["tool","memory"],
            labels:["use_azure","use_openai"],
            texts:["使用OpenAI","使用Azure OpenAI"]
        }},
    {
        title:"选择数据库服务",
        ConfigItem:{
            propName: ["tool","memory"],
            labels:["use_pinecone"],
            texts:["使用pinecone向量数据库"]
        }},
]

const App: FC = ()=>{

    return(
        <>
         <Row style={{background:"#F3F5F7",padding:"10px 0"}}>
            <Col span={3} className="textCenter">
                <span>
                    长期记忆模块：
                </span>
            </Col>
            <Col span={21}>
                <TitleSwitch
                    text="是否启用长期记忆(会增加token消耗):"
                    propNames={["tool","memory"]}
                    label="use_memory"
                ></TitleSwitch>

               {ConfigItems.map((item) =>{
                   return <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem}></ConfigRadioGroup>
               })}
            </Col>
         </Row>
        </>
    )
}

export default App