import baseUrl from "../../../../../constant/baseUrl.ts";
const propNames = ["application","baidu","baidu_filter"]
const updateUrl = baseUrl + "/baidu"
const updatePropsName = ["application","baidu"]
export const Configs = [
    {
        propNames:propNames,
        title:"百度文本审查服务API Key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"百度文本审查服务Secret Key",
        label:"secret_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
]

