import type {FC} from "react"
import {Col, Row} from "antd";
import "./index.scss"
import ConfigRadioGroup from "../../../components/ConfigRadioGroup.tsx";
import TitleSwitch from "../../../components/TitleSwitch.tsx";
import baseUrl from "../../../constant/baseUrl.ts";
const ConfigItems = [
    {
        title:"选择嵌入服务",
        ConfigItem:{
            propName: ["tool","memory"],
            labels:["use_azure","use_openai"],
            texts:["使用OpenAI","使用Azure OpenAI"],
            updateUrl:baseUrl + "/memory"
        }},

    {
        title:"选择数据库服务",
        ConfigItem:{
            propName: ["tool","memory"],
            labels:["use_pinecone"],
            texts:["使用pinecone向量数据库"],
            updateUrl:baseUrl + "/memory"
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
                    updateUrl={baseUrl + "/memory"}
                ></TitleSwitch>

               {ConfigItems.map((item,index) =>{
                   return <ConfigRadioGroup
                       title={item.title}
                       ConfigItem={item.ConfigItem}
                       key={index}

                   ></ConfigRadioGroup>
               })}
            </Col>
         </Row>
        </>
    )
}

export default App