import type {FC} from "react"
import {Col, Row, Switch} from "antd";
import {Config, useData} from "../context/DataContext.tsx";
import {produce} from "immer";
import React, {useRef} from "react";
import getLastObject from "../utils/getLastObject.ts";
import useUpdateHook from "../hooks/useUpdateHook.ts";

type Props = {
    propNames:string[],
    label:string,
    text:string,
    frontIcon?:React.ReactNode,
    updateUrl:string,
    updatePropsName?:string[],
}

const App : FC<Props> = ({propNames,label,text,frontIcon,updateUrl,updatePropsName})=>{

    const {data,setData} = useData()

    const {clearTime} = useRef(useUpdateHook(updateUrl)).current

    const onChange = (checked: boolean) => {
        const newData = produce(data, (draft:Config) => {
            getLastObject(propNames,draft)[label] = checked
        });
        const newConfig = getLastObject(updatePropsName ? updatePropsName : propNames,newData )
        clearTime(false,newConfig)
        setData(newData);
    };
    return(
        <>
            <Row>
                <Col style={{padding:"0 30px"}}>
                    <h4 style={{margin:0,height:"100%",lineHeight:1.7}}>{text} {frontIcon}</h4>
                </Col>
                <Col >
                    <Switch checked={getLastObject(propNames,data)[label]} onChange={onChange} />
                </Col>
            </Row>
        </>
    )
}

export default App
