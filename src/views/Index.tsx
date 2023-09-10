import React from 'react';
import { Layout, Space ,Typography} from 'antd';

const { Header, Sider, Content  } = Layout;

const { Title } = Typography;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: "10vh",
    backgroundColor: '#fff',
    border:"2px solid #F7F7F7",
    borderLeft:"0px",
    borderRight:"0px"
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '90vh',
    color: '#fff',
    backgroundColor: '#fff',
    border:"2px solid #F7F7F7",
    borderLeft:"0px",
    borderRight:"0px"
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
    border:"2px solid #F7F7F7",
    borderTop:"0px",
    borderBottom:"0px",
    margin:"0px 0px"
};

const titleStyle:React.CSSProperties = {
    textAlign: 'center',
    height: "100%",
    margin: "0",
    fontSize:"20px",
    color : "#1F1F1F",
    verticalAlign: "middle",
    lineHeight:"2.5em"
}


const App: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%',height:"100%"}} size={[0, 48]}>
        <Layout>
            <Header style={headerStyle}><Title style={titleStyle}>GoATuber Setting</Title></Header>
            <Layout hasSider>
                <Sider style={siderStyle}>Sider</Sider>
                <Content style={contentStyle}>Content</Content>
            </Layout>
        </Layout>
    </Space>
);

export default App;