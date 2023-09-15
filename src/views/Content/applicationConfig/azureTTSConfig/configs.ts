const propNames1 = ["application","azure","azure_tts"]
const propNames2 = ["application","azure","azure_tts","speak"]
const propNames3 = ["application","azure","azure_tts","voice"]

const configs = [
    {
        propNames:propNames1,
        title:"Azure 语音服务 API key",
        label:"api_key"
    },
    {
        propNames:propNames1,
        title:"Azure 语音服务 终结点",
        label:"end_point"
    },
    {
        propNames:propNames2,
        title:"SSML 版本",
        label:"version"
    },
    {
        propNames:propNames2,
        title:"SSML 根文档语言",
        label:"xmlLang"
    },
    {
        propNames:propNames2,
        title:"SSML XmlnsMstts",
        label:"xmlnsMstts"
    },
    {
        propNames:propNames2,
        title:"SSML Xmlns",
        label:"xmlns"
    },
    {
        propNames:propNames3,
        title:"说话人名称",
        label:"name"
    },
    {
        propNames:propNames3,
        title:"音频效果处理器",
        label:"effect"
    },
    {
        propNames:propNames3,
        title:"语速",
        label:"rate"
    },
    {
        propNames:propNames3,
        title:"音量",
        label:"volume"
    },


]

export default configs