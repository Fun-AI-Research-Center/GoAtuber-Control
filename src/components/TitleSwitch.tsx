import type {FC} from "react"
import {Col, Row, Switch} from "antd";
import {Config, useData} from "../context/DataContext.tsx";
import {produce} from "immer";
import React from "react";

type Props = {
    propNames:string[],
    label:string,
    text:string,
    frontIcon?:React.ReactNode
}

const App : FC<Props> = ({propNames,label,text,frontIcon})=>{

    const {data,setData} = useData()

    function getLastObject(data:any){
        let LastObject = data
        propNames.forEach((item) =>{
            if (LastObject[item]) {
                LastObject = LastObject[item]
            }
        })
        return LastObject
    }
    const onChange = (checked: boolean) => {
        const newData = produce(data, (draft:Config) => {
            getLastObject(draft)[label] = checked
        });
        setData(newData);
    };
    return(
        <>
            <Row>
                <Col style={{padding:"0 30px"}}>
                    <h4 style={{margin:0,height:"100%",lineHeight:1.7}}>{text} {frontIcon}</h4>
                </Col>
                <Col >
                    <Switch checked={getLastObject(data)[label]} onChange={onChange} />
                </Col>
            </Row>
        </>
    )
}

export default App
