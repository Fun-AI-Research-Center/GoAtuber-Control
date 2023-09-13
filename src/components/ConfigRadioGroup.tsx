import type { FC } from "react";
import { Col, Radio, Row } from "antd";
import { produce } from "immer";
import {useData} from "../context/DataContext.tsx";
interface TConfigItem {
    propName:string[],
    labels:string[],
    texts:string[]
}
interface Props {
    title: string; // 标题
    ConfigItem:TConfigItem
}

const ConfigRadioGroup: FC<Props> = ({ title, ConfigItem }) => {
    const { data, setData } = useData();
    const {propName,labels,texts} = ConfigItem

    function getValue() {
        for ( const item of labels) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (getLastObject(data)[item]){
                return item
            }
        }

    }

    function getLastObject(data:any){
        let LastObject = data
       propName.forEach((item) =>{
           if (LastObject[item]) {
               LastObject = LastObject[item]
           }
       })
       return LastObject
    }

    function updateData(changeLable:string) {
        const newData = produce(data, (draft: any) => {
            labels.map((item)=>{
                getLastObject(draft)[item] = item === changeLable;
            })
        });

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
                        {title}:
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
