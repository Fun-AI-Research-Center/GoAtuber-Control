import type {FC} from "react"
import {Col, Input} from "antd";
import {produce} from "immer";
import {useData} from "../context/DataContext.tsx";

type Props = {
    propNames:string[],
    label:string,
    title:string
}
const App : FC<Props> = ({propNames,label,title})=> {
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
            <Col span={4}>
                <h4 style={{margin:0,height:"100%",lineHeight:2}}>{title}</h4>
            </Col>
            <Col>
                <Input defaultValue="mysite" value={getLastObject(data)[label]} onChange={handleUrlChange}/>
            </Col>
        </>
    )
}

export default App