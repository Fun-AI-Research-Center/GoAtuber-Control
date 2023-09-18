import type {FC} from "react"
import {Col, Row} from "antd";
import TitleInput from "../../../../components/TitleInput.tsx";
import {Configs1,Configs2,Configs3} from "./configs.ts";
import useIconHook from "../../../../hooks/useIconHook.tsx";
import ConfigRadioGroup from "../../../../components/ConfigRadioGroup.tsx";
import baseUrl from "../../../../constant/baseUrl.ts";


const App : FC = () => {
    const text1 = "(避免一次对话消耗太多token),设置为0关闭清理"
    const text2 = "清理全部是在token达到上限的时候清理全部累积的记忆,token消耗少但记忆效果不佳;清理队首是达到上限后移除队首的消息,效果好但token消耗更多"
    const Icon = useIconHook()
    return(
        <>
            <Row style={{background:"#F3F5F7",padding:"10px 0"}}>
                <Col span={5} className="textCenter">
                <span>
                    Azure OpenAI 配置文件
                </span>
                </Col>
                <Col span={19}>
                    {Configs1.map(item =>{
                        return <TitleInput propNames={item.propNames} title={item.title} label={item.label} style={{padding:"5px 0"}}></TitleInput>
                    })}
                    <Col>
                        <Row style={{width:"100%"}}>
                            <Col span={5} className="textCenter">
                                <span style={{fontSize:".8rem"}}>
                                    文本生成服务:短期记忆与清理
                                </span>
                            </Col>
                            <Col span={19} >
                                {Configs2.map(item =>{
                                    return <TitleInput propNames={item.propNames}
                                                       title={item.title}
                                                       label={item.label}
                                                       style={{padding:"5px 0"}}
                                                       frontIcon={Icon(text1)}
                                    ></TitleInput>})}
                                <ConfigRadioGroup
                                    title="记忆清理方式"
                                    ConfigItem={{
                                        propName:["application","azure","azure_openai","memory_and_clean"],
                                        labels:["clean_all","clean_one"],
                                        texts:["清除全部","清除队首"],
                                        updateUrl:baseUrl+"/azure_openai"
                                    }}
                                    Icon={Icon(text2)}
                                ></ConfigRadioGroup>
                            </Col>
                        </Row>
                        <div style={{margin:"20px 0"}}></div>
                        <Row style={{width:"100%"}}>
                            <Col span={5} className="textCenter">
                            <span style={{fontSize:".8rem"}}>
                                嵌入服务(与长期记忆有关)
                            </span>
                            </Col>
                            <Col span={19} >
                                {Configs3.map(item =>{
                                    return <TitleInput propNames={item.propNames}
                                                       title={item.title}
                                                       label={item.label}
                                                       style={{padding:"5px 0"}}
                                    ></TitleInput>})}
                            </Col>
                        </Row>

                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default App