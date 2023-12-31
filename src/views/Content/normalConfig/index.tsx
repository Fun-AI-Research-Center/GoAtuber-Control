import "./index.scss"
import ConfigRadioGroup from "../../../components/ConfigRadioGroup.tsx";
import Proxy from "./proxy";
import Configs from "./configs";



function App() {

    return (<>

        {Configs.map((item,index)=>{
            if (index % 2 === 0)
            return <div style={{background:"#F3F5F7",padding:"5px 0"}} key={index}>
                <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem} />
            </div>
            return <div style={{padding:"5px 0"}} key={index}>
                <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem} />
            </div>
        })}
        <Proxy></Proxy>
    </>)
}

export default App;