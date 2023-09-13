import {FC} from "react";
import {Row, Switch, Col} from "antd";
import {Config, useData} from "../../../../context/DataContext.tsx";
import {produce} from "immer";
import TitleInput from "../../../../components/TitleInput.tsx";
const App : FC = () => {
    const {data,setData} = useData()
    const onChange = (checked: boolean) => {
        const newData = produce(data, (draft:Config) => {
            draft.proxy.use_proxy = checked;
        });
        setData(newData);
    };




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
                    <TitleInput propNames={["proxy"]} label="proxy_url" title="url:"></TitleInput>
                </Row>
            </div>
        </>
        )
}

export default App