import React, {useEffect} from 'react';
import type { MenuProps  } from 'antd';
import {useNavigate } from "react-router-dom"
import {Menu} from 'antd';
import "./index.scss"
type MenuItem = Required<MenuProps>['items'][number];
const Items = ["常规配置","监听平台配置","工具配置","应用包配置"]
const applicationConfigs = ["Azure","讯飞","百度"]
const paths = ["/normalConfig","/monitorConfig","/toolConfig","/azureConfig","/xunfei","/baidu"]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = Items.map((item,index)=>{
    if(index === 3 ){
        const Configs:MenuItem[] = []
        applicationConfigs.forEach((item,index)=> {
            Configs.push(getItem(item,index+3,null))
        })
        return getItem(item,"app",null,Configs)
    }
    return getItem(item,index,null)
})


const App: React.FC = () => {
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(paths[parseInt(e.key)])
    };
    const getDefaultIndex = () => {
        const hash = location.hash.replace("#","")
        console.log([String(paths.indexOf(hash))])
        return [String(paths.indexOf(hash))]
    }

    useEffect(()=>{
       if (location.hash === "#/" || location.hash === "")
        navigate("/normalConfig")
    },[])

    return (
        <>
            <Menu
                onClick={onClick}
                style={{ width: "100%"}}
                defaultSelectedKeys={getDefaultIndex()}
                mode="inline"
                items={items}
            />
        </>
);
};

export default App;