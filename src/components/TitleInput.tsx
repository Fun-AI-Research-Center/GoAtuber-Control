import type {FC} from "react"
import {Col, Input, Row} from "antd";
import {produce} from "immer";
import {useData} from "../context/DataContext.tsx";
import React from "react";

type Props = {
    propNames:string[],
    label:string,
    title:string,
    style?:object,
    frontIcon?:React.ReactNode
}
const App : FC<Props> = ({propNames,label,title,style,frontIcon})=> {
    const {data,setData} = useData()
    function handleUrlChange(e:any){
        const newUrl = e.target.value;
        // 使用 immer 更新 proxy_url 属性
        const newData = produce(data, (draft:any) => {
            getLastObject(draft)[label] = newUrl;
        });
        setData(newData);
    }

    function getLastObject(data:any){
        let LastObject = data
        propNames.forEach((item) =>{
            if (LastObject[item]) {
                LastObject = LastObject[item]
            }
        })
        return LastObject
    }

    return(
        <>
            <Row style={{...style}}>
                <Col span={6}>
                        <h4 style={{margin:0,height:"100%",lineHeight:2}}>{title} {frontIcon}</h4>
                </Col>
                <Col span={16}>
                    <Input defaultValue="mysite" value={getLastObject(data)[label]} onChange={handleUrlChange}/>
                </Col>
            </Row>
        </>
    )
}

export default App