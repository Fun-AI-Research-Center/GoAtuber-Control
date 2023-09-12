import "./index.scss"
import { Radio } from 'antd';

function App() {
    return (<>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
        </Radio.Group>
    </>)
}

export default App;