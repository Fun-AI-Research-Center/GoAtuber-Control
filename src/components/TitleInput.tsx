import type {FC} from "react"
import {Col, Input, InputNumber, Row} from "antd";
import {produce} from "immer";
import {useData} from "../context/DataContext.tsx";
import React, {useRef} from "react";
import getLastObject from "../utils/getLastObject.ts";
import useUpdateHook from "../hooks/useUpdateHook.ts";

type Props = {
    propNames:string[],
    label:string,
    title:string,
    style?:object,
    frontIcon?:React.ReactNode,
    updateUrl:string,
    updatePropsName?:string[],
    isNumber?:boolean
}
const App : FC<Props> = ({propNames,label,title,style,frontIcon,updateUrl,updatePropsName,isNumber = false})=> {
    const {data,setData} = useData()
    const {clearTime} = useRef(useUpdateHook(updateUrl)).current
    function handleChange(e:any){
        const newInput = e.target.value;
        // 使用 immer 更新 proxy_url 属性
        const newData = produce(data, (draft:any) => {
            getLastObject(propNames,draft)[label] = newInput;
        });
        const newConfig = getLastObject(updatePropsName ? updatePropsName : propNames,newData)
        clearTime(false,newConfig)
        setData(newData);
    }

    function handleNumberChange(number:number | null){
        const newInput = number;
        // 使用 immer 更新 proxy_url 属性
        const newData = produce(data, (draft:any) => {
            getLastObject(propNames,draft)[label] = newInput;
        });
        const newConfig = getLastObject(updatePropsName ? updatePropsName : propNames,newData)
        clearTime(false,newConfig)
        setData(newData);
    }


    return(
        <>
            <Row style={{...style}}>
                <Col span={6}>
                        <h4 style={{margin:0,height:"100%",lineHeight:2}}>{title} {frontIcon}</h4>
                </Col>
                <Col span={16}>
                    {isNumber ? <InputNumber
                        value={getLastObject(propNames, data)[label]}
                        onChange={handleNumberChange}
                        style={{width:"100%"}}
                    /> :  <Input
                        defaultValue="mysite"
                        value={getLastObject(propNames,data)[label]}
                        onChange={handleChange}
                    />}

                </Col>
            </Row>
        </>
    )
}

export default App