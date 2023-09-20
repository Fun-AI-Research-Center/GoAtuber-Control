import baseUrl from "../../../../../constant/baseUrl.ts";
const propNames = ["application","xunfei","xun_fei_tts"]
const propNames2 = ["application","xunfei","xun_fei_tts","xun_fei_voice"]
const updateUrl = baseUrl + "/xunfei"
const updatePropsName = ["application","xunfei"]
import {Props} from "../../../../../components/TitleInput.tsx";
import useIconHook from "../../../../../hooks/useIconHook.tsx";

// eslint-disable-next-line react-hooks/rules-of-hooks
const Icon = useIconHook()
export const Configs1:Props[] = [
    {
        propNames:propNames,
        title:"讯飞TTS API Key",
        label:"api_key",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"讯飞TTS API Secret",
        label:"api_secret",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames,
        title:"讯飞TTS API ID",
        label:"app_id",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
]

export const Configs2:Props[] = [
    {
        propNames:propNames2,
        title:"音频采样率",
        label:"auf",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        frontIcon:Icon("audio/L16;rate=8000：合成8K 的音频audio/L16;rate=16000：合成16K 的音频")
    },
    {
        propNames:propNames2,
        title:"发音人",
        label:"vcn",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
    },
    {
        propNames:propNames2,
        title:"语速",
        label:"speed",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("可选值：[0-100]，默认为50")

    },
    {
        propNames:propNames2,
        title:"音量",
        label:"volume",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("可选值：[0-100]，默认为50")

    },
    {
        propNames:propNames2,
        title:"音高",
        label:"pitch",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        isNumber:true,
        frontIcon:Icon("可选值：[0-100]，默认为50")

    },
    {
        propNames:propNames2,
        title:"英文发音方式",
        label:"reg",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        frontIcon:Icon("0：自动判断处理.如果不确定将按照英文词语拼写处理（缺省）1：所有英文按字母发音 2：自动判断处理，如果不确定将按照字母朗读")
    },
    {
        propNames:propNames2,
        title:"合成音频数字发音方式",
        label:"rdn",
        updateUrl:updateUrl,
        updatePropsName : updatePropsName,
        frontIcon:Icon("0：自动判断（默认值）1：完全数值 2：完全字符串 3：字符串优先")

    },
]

