import baseUrl from "../../../../constant/baseUrl.ts";

const propNames = ["application","azure","azure_stt"]
const updateUrl = baseUrl + "/azure"
const updatePropsName = ["application","azure"]
const configs = [
    {
        propNames:propNames,
        title:"Azure 语音服务 API key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName:updatePropsName
    },
    {
        propNames:propNames,
        title:"Azure 语音服务 语音区域",
        label:"speech_region",
        updateUrl:updateUrl,
        updatePropsName:updatePropsName
    },
    {
        propNames:propNames,
        title:"Azure 语音服务 语言",
        label:"language",
        updateUrl:updateUrl,
        updatePropsName:updatePropsName
    },
    {
        propNames:propNames,
        title:"Azure 语音服务 格式",
        label:"format",
        updateUrl:updateUrl,
        updatePropsName:updatePropsName
    },

]

export default configs