import baseUrl from "../../../../../constant/baseUrl.ts";
const propNames = ["application","baidu","baidu_ernie"]
const propNames2 = ["application","baidu","baidu_ernie","memory_and_clean"]
const updateUrl = baseUrl + "/baidu"
const updatePropsName = ["application","baidu"]
import useIconHook from "../../../../../hooks/useIconHook.tsx";
import {Props} from "../../../../../components/TitleInput.tsx";

// eslint-disable-next-line react-hooks/rules-of-hooks
const Icon = useIconHook()
export const Configs:Props[] = [
    {
        propNames:propNames,
        title:"文心一言应用ID",
        label:"app_id",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"文心一言API Key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"文心一言Secret Key",
        label:"secret_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"温度",
        label:"temperature",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("说明:（1）较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定（2）默认0.95，范围 (0, 1.0]，不能为0（3）建议top_p和temperature不要同时更改)")
    },
    {
        propNames:propNames,
        title:"TopP ",
        label:"top_p",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("说明：（1）影响输出文本的多样性，取值越大，生成文本的多样性越强（2）默认0.8，取值范围 [0, 1.0]（3）建议top_p和temperature不要同时更改")
    },
    {
        propNames:propNames,
        title:"Penalty Score",
        label:"penalty_score",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("通过对已生成的token增加惩罚，减少重复生成的现象。说明：（1）值越大表示惩罚越大（2）默认1.0，取值范围：[1.0, 2.0]")
    },
    {
        propNames:propNames,
        title:"Prompt",
        label:"prompt",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("前端通过指定方式拼接得到")
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
