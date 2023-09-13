import "./index.scss"
import ConfigRadioGroup from "../../../components/ConfigRadioGroup.tsx";
import Proxy from "./proxy";

const ConfigItems = [
    {
    title:"监视平台选择",
    ConfigItem:{
    propName: ["monitor"],
    labels:["bilibili","none"],
    texts:["bilibili","不选(不监听任何平台)"]
   }},
    {
        title: "filter平台选择",
        ConfigItem: {
            propName: ["filter"],
            labels: ["dict", "baidu", "none"],
            texts: ["字典过滤", "百度过滤", "不选(不使用任何filter平台)"]
        }
    },
    {
        title: "LLM平台选择",
        ConfigItem: {
            propName: ["llm"],
            labels: ["openai", "azure_openai", "none"],
            texts: ["OpenAI", "Azure OpenAI", "不选(不使用任何LLM平台)"]
        }
    },
    {
        title: "文本转语音平台选择",
        ConfigItem: {
            propName: ["speech"],
            labels: ["azure", "none"],
            texts: ["Azure文本转语音服务", "不选(不使用tts服务)"]
        }
    },
    {
        title: "语音转文本平台选择",
        ConfigItem: {
            propName: ["voice"],
            labels: ["azure", "xfyun", "none"],
            texts: ["Azure语音转文本服务", "讯飞语音转文本服务", "不选(不使用stt服务)"]
        }
    },
    {
        title:"情感分析",
        ConfigItem:{
        propName: ["mood"],
        labels:["dict","none"],
        texts:["字典匹配","不选(不过滤)"]
      }
    }
]

function App() {

    return (<>

        {ConfigItems.map((item,index)=>{
            if (index % 2 === 0)
            return <div style={{background:"#F3F5F7",padding:"5px 0"}}>
                <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem}/>
            </div>
            return <div style={{padding:"5px 0"}}>
                <ConfigRadioGroup title={item.title} ConfigItem={item.ConfigItem}/>
            </div>
        })}
        <Proxy></Proxy>
    </>)
}

export default App;