import baseUrl from "../../../../../constant/baseUrl.ts";
const propNames = ["application","azure","azure_openai"]
const propNames2 = ["application","azure","azure_openai","memory_and_clean"]
const propNames3 = ["application","azure","azure_openai","azure_embedding"]

const updateUrl = baseUrl + "/azure"
const updatePropsName = ["application","azure"]
export const Configs1 = [
    {
        propNames:propNames,
        title:"Azure OpenAI API key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
    {
        propNames:propNames,
        title:"Azure OpenAI 终结点",
        label:"end_point",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
    {
        propNames:propNames,
        title:"模型部署的名称",
        label:"deployment_id",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
    {
        propNames:propNames,
        title:"使用的模型名称",
        label:"model",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
    {
        propNames:propNames,
        title:"温度",
        label:"temperature",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber: true
    },
    {
        propNames:propNames,
        title:"Top P",
        label:"top_p",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber: true
    },
    {
        propNames:propNames,
        title:"一次对话最大token使用限制",
        label:"max_tokens",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber: true
    },
    {
        propNames:propNames,
        title:"停止标志",
        label:"stop",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,

    },
    {
        propNames:propNames,
        title:"presence penalty",
        label:"presence_penalty",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber: true
    },
    {
        propNames:propNames,
        title:"frequency penalty",
        label:"frequency_penalty",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber: true
    },
]

export const Configs2 = [
    {
        propNames:propNames2,
        title:"短期记忆token上限",
        label:"short_memory_token_limit",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
]

export const Configs3 = [
    {
        propNames:propNames3,
        title:"embedding 模型部署名称",
        label:"deployment_id",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
    {
        propNames:propNames3,
        title:"embedding API 版本",
        label:"api_version",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName
    },
]