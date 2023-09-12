import React, {useEffect} from 'react';
import type { MenuProps  } from 'antd';
import {useNavigate } from "react-router-dom"
import {Button, Menu} from 'antd';
import "./index.scss"
type MenuItem = Required<MenuProps>['items'][number];
const Items = ["常规配置","监听平台配置","工具配置","应用包配置"]
const paths = ["/normalConfig","/monitorConfig","/tool","/applicationPackage"]

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
    return getItem(item,index,null)
})


const App: React.FC = () => {
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(paths[parseInt(e.key)])
    };

    useEffect(()=>{
       if (location.hash === "#/")
        navigate("/normalConfig")
    },[])

    return (
        <>
            <Menu
                onClick={onClick}
                style={{ width: "100%"}}
                defaultSelectedKeys={['0']}
                mode="inline"
                items={items}
            />
            <Button type="primary" className="button">启动 ！</Button>
        </>
);
};

export default App;