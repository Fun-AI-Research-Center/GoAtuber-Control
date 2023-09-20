import type {FC} from "react"
import AzureOpenAIConfig from "./azureOpenAIConfig";
import AzureTTSConfig from "./azureTTSConfig";
import AzureSTTConfig from "./azureSTTConfig";
const App : FC = () => {
    return (
        <>
            <AzureOpenAIConfig></AzureOpenAIConfig>
            <AzureTTSConfig></AzureTTSConfig>
            <AzureSTTConfig></AzureSTTConfig>
        </>
    )
}

export default App
