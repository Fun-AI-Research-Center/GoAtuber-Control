import {FC} from "react";
import {Row, Switch, Input, Col} from "antd";
import {Config, useData} from "../../../../context/DataContext.tsx";
import {produce} from "immer";
const App : FC = () => {
    const {data,setData} = useData()
    const onChange = (checked: boolean) => {
        const newData = produce(data, (draft:Config) => {
            draft.proxy.use_proxy = checked;
        });
        setData(newData);
    };

    function handleUrlChange(e:any){
        const newUrl = e.target.value;
        // 使用 immer 更新 proxy_url 属性
        const newData = produce(data, (draft:Config) => {
            draft.proxy.proxy_url = newUrl;
        });
        setData(newData);
    }


    return(
        <>
            <div style={{background:"#F3F5F7",padding:"10px 0"}}>
                <Row>
                    <Col span={8}>
                        <h4 style={{margin:0,height:"100%",lineHeight:1.5}}>是否启用代理服务(用于正常访问外网平台服务):</h4>
                    </Col>
                    <Col >
                        <Switch checked={data?.proxy.use_proxy} onChange={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <h4 style={{margin:0,height:"100%",lineHeight:2}}>url:</h4>
                    </Col>
                    <Col>
                        <Input defaultValue="mysite" value={data?.proxy.proxy_url} onChange={handleUrlChange}/>
                    </Col>
                </Row>
            </div>
        </>
        )
}

export default App