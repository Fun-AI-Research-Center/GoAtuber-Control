import type { FC } from "react";
import { Col, Radio, Row } from "antd";
import { produce } from "immer";
import {useData} from "../context/DataContext.tsx";
import React, {useRef} from "react";
import useUpdateHook from "../hooks/useUpdateHook.ts";
import getLastObject from "../utils/getLastObject.ts";
interface TConfigItem {
    propName:string[],
    labels:string[],
    texts:string[],
    updateUrl:string,
    updatePropsName?:string[]
}
interface Props {
    title: string; // 标题
    ConfigItem:TConfigItem,
    Icon?:React.ReactNode,
}

const ConfigRadioGroup: FC<Props> = ({ title, ConfigItem,Icon }) => {
    const { data, setData } = useData();
    const {propName,labels,texts,updateUrl,updatePropsName} = ConfigItem
    const {clearTime} =useRef(useUpdateHook(updateUrl)).current

    function getValue() {
        for ( const item of labels) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (getLastObject(propName,data)[item]){
                return item
            }
        }
    }


    function updateData(changeLable:string) {
        const newData = produce(data, (draft: any) => {
            labels.map((item)=>{
                getLastObject(propName,draft)[item] = item === changeLable;
            })
        });
        const NewConfigProps = updatePropsName ?  updatePropsName : propName
        const newLastData =  getLastObject(NewConfigProps,newData)
        clearTime(false,newLastData)
        setData(newData);
    }

    function handleChange(e:any) {
           labels.map((item)=>{
               if (e.target.value === item){
                   updateData(item);
               }

           })


    }

    return (
        <>
            <Row style={{ margin: 10 }}>
                <Col style={{padding:"0 20px"}}>
                    <h4 style={{ margin: 0, height: "100%", lineHeight: "2.5em" }}>
                        {title} {Icon}
                    </h4>
                </Col>
                <Col offset={2}>
                    <Radio.Group buttonStyle="solid" value={getValue()} onChange={handleChange}>
                        {labels.map((item:string,index:number) => (
                            <Radio.Button key={item} value={item}>
                                {texts[index]}
                            </Radio.Button>
                        ))}
                    </Radio.Group>
                </Col>
            </Row>
        </>
    );
};

export default ConfigRadioGroup;
