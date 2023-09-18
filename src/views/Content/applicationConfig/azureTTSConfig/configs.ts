import baseUrl from "../../../../constant/baseUrl.ts";

const propNames1 = ["application","azure","azure_tts"]
const propNames2 = ["application","azure","azure_tts","speak"]
const propNames3 = ["application","azure","azure_tts","voice"]
const updateUrl = baseUrl +"/azure"
const updatePropsName =  ["application","azure"]

const configs = [
    {
        propNames:propNames1,
        title:"Azure 语音服务 API key",
        label:"api_key",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames1,
        title:"Azure 语音服务 终结点",
        label:"end_point",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames2,
        title:"SSML 版本",
        label:"version",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames2,
        title:"SSML 根文档语言",
        label:"xmlLang",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames2,
        title:"SSML XmlnsMstts",
        label:"xmlnsMstts",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames2,
        title:"SSML Xmlns",
        label:"xmlns",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames3,
        title:"说话人名称",
        label:"name",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames3,
        title:"音频效果处理器",
        label:"effect",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames3,
        title:"语速",
        label:"rate",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },
    {
        propNames:propNames3,
        title:"音量",
        label:"volume",
        updateUrl: updateUrl,
        updatePropsName: updatePropsName
    },


]

export default configs