import {FC} from "react";
import TitleInput from "../../../../components/TitleInput.tsx";
import TitleSwitch from "../../../../components/TitleSwitch.tsx";
const App : FC = () => {

    return(
        <>
            <div style={{background:"#F3F5F7",padding:"10px 0"}}>
                <TitleSwitch propNames={["proxy"]} label={"use_proxy"} text="是否启用代理服务(用于正常访问外网平台服务):"></TitleSwitch>
                <TitleInput propNames={["proxy"]} label="proxy_url" title="url:"></TitleInput>
            </div>
        </>
        )
}

export default App