import baseUrl from "../../../../../constant/baseUrl.ts";
const propNames = ["application","xunfei","xun_fei_spark"]
const propNames2 = ["application","xunfei","xun_fei_spark","memory_and_clean"]
const updateUrl = baseUrl + "/xunfei"
const updatePropsName = ["application","xunfei"]
import {Props} from "../../../../../components/TitleInput.tsx";
import useIconHook from "../../../../../hooks/useIconHook.tsx";

// eslint-disable-next-line react-hooks/rules-of-hooks
const Icon = useIconHook()
export const Configs:Props[] = [
    {
        propNames:propNames,
        title:"讯飞星火大模型请求地址",
        label:"host_url",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"讯飞星火大模型应用ID",
        label:"app_id",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"讯飞星火大模型API Key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"讯飞星火大模型API Secret",
        label:"api_secret",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"指定访问的领域",
        label:"domain",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        frontIcon:Icon("general指向V1.5版本 generalv2指向V2版本")
    },
    {
        propNames:propNames,
        title:"核采样阈值",
        label:"temperature",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("用于决定结果随机性，取值越高随机性越强即相同的问题得到的不同答案的可能性越高。取值为[0,1],默认为0.5")
    },
    {
        propNames:propNames,
        title:"模型回答token最大用量",
        label:"max_tokens",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("V1.5取值为[1,4096]，V2.0取值为[1,8192]。默认为2048")
    },
    {
        propNames:propNames,
        title:"Top K",
        label:"top_k",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("从k个候选中随机选择⼀个（⾮等概率）,取值为[1，6],默认为4")
    },
    {
        propNames:propNames,
        title:"Prompt提示词",
        label:"prompt",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
]

export  const Configs2 = [
    {
        propNames:propNames2,
        title:"短期记忆token上限",
        label:"short_memory_token_limit",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true
    },
]
