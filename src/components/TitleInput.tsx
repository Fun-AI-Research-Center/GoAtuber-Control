import type {FC} from "react"
import {Col, Input, InputNumber, Row, Select} from "antd";
import {produce} from "immer";
import {useData} from "../context/DataContext.tsx";
import React, {useEffect, useRef, useState} from "react";
import getLastObject from "../utils/getLastObject.ts";
import useUpdateHook from "../hooks/useUpdateHook.ts";
const {Option} = Select
export type Props = {
    propNames:string[],
    label:string,
    title:string,
    style?:object,
    frontIcon?:React.ReactNode,
    updateUrl:string,
    updatePropsName?:string[],
    isNumber?:boolean,
    isPercent?:boolean
}
const App : FC<Props> = ({propNames,label,title,style,frontIcon,updateUrl,updatePropsName,isNumber = false,isPercent = false})=> {
    const {data,setData} = useData()
    const {clearTime} = useRef(useUpdateHook(updateUrl)).current
    const [defaultValue,setDefaultValue] = useState("+")
    
    useEffect(()=>{
        if (getLastObject(propNames,data)[label].includes && getLastObject(propNames,data)[label].includes("-")){
            setDefaultValue("-")
        }else {
            setDefaultValue("+")
        }

    },[data, isPercent, label, propNames])
    const addonBefore = isPercent ? (<Select
            value={defaultValue}
            onChange={(value)=>{
                const newData = produce(data, (draft:any) => {
                    if (value === "-") {
                        getLastObject(propNames, draft)[label] = getLastObject(propNames, draft)[label].replace("+", "-")
                        setDefaultValue("-")
                    }
                    else{
                        getLastObject(propNames, draft)[label] = getLastObject(propNames, draft)[label].replace("-", "+")
                        setDefaultValue("+")
                    }
                });
                const newConfig = getLastObject(updatePropsName ? updatePropsName : propNames,newData)
                clearTime(false,newConfig)

            }}
        >
            <Option value="+">+</Option>
            <Option value="-">-</Option>
        </Select>) : ""
        const  addonAfter = isPercent ? "%" : ""

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
            if (isPercent){
                getLastObject(propNames,draft)[label] = defaultValue + newInput + "%"
            }else getLastObject(propNames,draft)[label] = newInput;
        });
        const newConfig = getLastObject(updatePropsName ? updatePropsName : propNames,newData)
        clearTime(false,newConfig)
        setData(newData);
    }

    function handAdd(item: string | number | null) {
        if (item === null) return item
        if (typeof item === "number") return  item
        if (!isPercent) return parseInt(item)
        // 取出百分号
        item = item.replace("%","")

        if (item.indexOf("-") !== -1 ){
            return parseInt(item.replace("-",""))
        }

        return parseInt(item.replace("+",""))
    }


    return(
        <>
            <Row style={{...style}}>
                <Col span={6}>
                        <h4 style={{margin:0,height:"100%",lineHeight:2}}>{title} {frontIcon} </h4>
                </Col>
                <Col span={16}>
                    {isNumber ? <InputNumber
                        value={handAdd(getLastObject(propNames, data)[label])}
                        onChange={handleNumberChange}
                        style={{width:"100%"}}
                        addonBefore={addonBefore}
                        addonAfter={addonAfter}
                    /> :  <Input
                        defaultValue="mysite"
                        value={getLastObject(propNames,data)[label]}
                        onChange={handleChange}
                        addonAfter={addonAfter}
                    />}

                </Col>
            </Row>
        </>
    )
}

export default App