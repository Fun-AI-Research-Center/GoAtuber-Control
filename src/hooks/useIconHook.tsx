import Prompt from "../components/Prompt.tsx";

function useIconHook(){
    return function Icon(text:string){
        return <Prompt text={<span>{text}</span>} />
    }
}

export default useIconHook