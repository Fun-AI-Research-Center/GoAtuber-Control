import type {FC} from "react"
import {Col, Row} from "antd";
import {Configs,Configs2} from "./configs.tsx";
import TitleInput from "../../../../../components/TitleInput.tsx";
import ConfigRadioGroup from "../../../../../components/ConfigRadioGroup.tsx";
import baseUrl from "../../../../../constant/baseUrl.ts";
import useIconHook from "../../../../../hooks/useIconHook.tsx";



const App : FC = () => {
    const text1 = "(避免一次对话消耗太多token),设置为0关闭清理"
    const text2 = "清理全部是在token达到上限的时候清理全部累积的记忆,token消耗少但记忆效果不佳;清理队首是达到上限后移除队首的消息,效果好但token消耗更多"
    const Icon = useIconHook()
    return (
        <>
            <Row style={{background:"#F3F5F7",padding:"10px 0"}}>
                <Col span={5} className="textCenter">
                <span>
                   百度文本生成服务(文心一言)
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
                            isNumber={item.isNumber}
                            frontIcon={item.frontIcon}
                            key={index}
                        ></TitleInput>
                    })}
                    <Col>
                        <Row style={{width:"100%"}}>
                            <Col span={5} className="textCenter">
                                <span style={{fontSize:".8rem"}}>
                                    文本生成服务:短期记忆与清理
                                </span>
                            </Col>
                            <Col span={19} >
                                {Configs2.map((item,index) =>{
                                    return <TitleInput propNames={item.propNames}
                                                       title={item.title}
                                                       label={item.label}
                                                       style={{padding:"5px 0"}}
                                                       frontIcon={Icon(text1)}
                                                       key={index}
                                                       updateUrl={item.updateUrl}
                                                       updatePropsName={item.updatePropsName}
                                                       isNumber={true}

                                    ></TitleInput>})}
                                <ConfigRadioGroup
                                    title="记忆清理方式"
                                    ConfigItem={{
                                        propName:["application","baidu","baidu_ernie","memory_and_clean"],
                                        labels:["clean_all","clean_one"],
                                        texts:["清除全部","清除队首"],
                                        updateUrl:baseUrl+"/baidu",
                                        updatePropsName:["application","baidu"]
                                    }}
                                    Icon={Icon(text2)}
                                ></ConfigRadioGroup>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default App
