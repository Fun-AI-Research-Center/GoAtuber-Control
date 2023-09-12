import './App.css'
import Index from "./views/Main";
import {useData} from "./context/DataContext.tsx";
import {useEffect} from "react";
import getInitData from "./apis/init.ts";


function App() {
    const {setData} = useData()
    useEffect( ()=>{
        getInitData().then(async res =>{
             setData(res)
        }).catch(error => {
            console.error(error)
        })

    },[])

  return (
    <>
      <Index></Index>
    </>
  )
}

export default App
