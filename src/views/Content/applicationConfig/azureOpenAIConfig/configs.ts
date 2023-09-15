const propNames = ["application","azure","azure_openai"]
const propNames2 = ["application","azure","azure_openai","memory_and_clean"]
const propNames3 = ["application","azure","azure_openai","azure_embedding"]
export const Configs1 = [
    {
        propNames:propNames,
        title:"Azure OpenAI API key",
        label:"api_key"
    },
    {
        propNames:propNames,
        title:"Azure OpenAI 终结点",
        label:"end_point"
    },
    {
        propNames:propNames,
        title:"模型部署的名称",
        label:"deployment_id"
    },
    {
        propNames:propNames,
        title:"使用的模型名称",
        label:"model"
    },
    {
        propNames:propNames,
        title:"温度",
        label:"temperature"
    },
    {
        propNames:propNames,
        title:"Top P",
        label:"top_p"
    },
    {
        propNames:propNames,
        title:"一次对话最大token使用限制",
        label:"max_tokens"
    },
    {
        propNames:propNames,
        title:"停止标志",
        label:"stop"
    },
    {
        propNames:propNames,
        title:"presence penalty",
        label:"presence_penalty"
    },
    {
        propNames:propNames,
        title:"frequency penalty",
        label:"frequency_penalty"
    },
]

export const Configs2 = [
    {
        propNames:propNames2,
        title:"短期记忆token上限",
        label:"short_memory_token_limit"
    },
]

export const Configs3 = [
    {
        propNames:propNames3,
        title:"embedding 模型部署名称",
        label:"deployment_id"
    },
    {
        propNames:propNames3,
        title:"embedding API 版本",
        label:"api_version"
    },
]