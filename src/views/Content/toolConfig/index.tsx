import type {FC} from "react"
import {Col, Row, Switch} from "antd";
import {Config, useData} from "../../../context/DataContext.tsx";
import "./index.scss"
import {produce} from "immer";
import ConfigRadioGroup from "../../../components/ConfigRadioGroup.tsx";
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
    const {data,setData} = useData()
    const handleChange = (checked:boolean)=>{
         const newData = produce(data,(draft:Config)=>{
             draft.tool.memory.use_memory = checked
         })
        setData(newData)
    }
    return(
        <>
         <Row style={{background:"#F3F5F7",padding:"10px 0"}}>
            <Col span={3} className="textCenter">
                <span>
                    长期记忆模块：
                </span>
            </Col>
            <Col span={21}>
                <Row>
                    <Col>
                        <h4 style={{margin:0,lineHeight:1.5,padding:"0 30px"}}>
                            是否启用长期记忆(会增加token消耗):
                        </h4>
                    </Col>
                    <Col>
                        <Switch checked={data?.tool.memory.use_memory} onChange={handleChange}></Switch>
                    </Col>
                </Row>
                       {ConfigItems.map((item) =>{
                           return <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem}></ConfigRadioGroup>
                       })}
            </Col>
         </Row>
        </>
    )
}

export default App