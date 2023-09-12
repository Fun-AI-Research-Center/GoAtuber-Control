import type { FC } from "react";
import { Col, Radio, Row } from "antd";
import { produce } from "immer";
import {Config, useData} from "../context/DataContext.tsx";
type PropName = "monitor" | "llm" | "filter" | "mood" | "speech" | "voice"
interface TConfigItem {
    propName:PropName,
    labels:string[],
    texts:string[]
}
interface Props {
    title: string; // 标题
    ConfigItem:TConfigItem
}

const ConfigRadioGroup: FC<Props> = ({ title, ConfigItem }) => {
    const { data, setData } = useData();
    const {propName,labels} = ConfigItem

    function getValue() {
        for ( const item of labels) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (data?.[propName]?.[item]){
                return item
            }
        }

    }

    function updateData(changeLable:string) {
        const newData = produce(data, (draft: Config) => {
            Object.keys(draft[propName]).map((item)=>{
                if (item === changeLable){
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    draft[propName][item] = true
                }else {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    draft[propName][item] = false
                }
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
                <Col span={4}>
                    <h4 style={{ margin: 0, height: "100%", lineHeight: "2.5em" }}>
                        {title}:
                    </h4>
                </Col>
                <Col>
                    <Radio.Group buttonStyle="solid" value={getValue()} onChange={handleChange}>
                        {labels.map((item:string) => (
                            <Radio.Button key={item} value={item}>
                                {item=== "none"? "不选(不使用任何)" : item}
                            </Radio.Button>
                        ))}
                    </Radio.Group>
                </Col>
            </Row>
        </>
    );
};

export default ConfigRadioGroup;
