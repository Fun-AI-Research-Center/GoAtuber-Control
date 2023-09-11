import React from 'react';
import { Layout, Space ,Typography} from 'antd';
import Menu from "../Menu/ienu.tsx"
import "./index.scss"
const { Header, Sider, Content  } = Layout;
const { Title } = Typography;









const App: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%',height:"100%"}} size={[0, 48]}>
        <Layout>
            <Header className="header"><Title className="title">GoATuber Setting</Title></Header>
            <Layout hasSider>
                <Sider className="side"><Menu></Menu></Sider>
                <Content className="content">Content</Content>
            </Layout>
        </Layout>
    </Space>
);

export default App;