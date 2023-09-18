import axios from "axios";

type TimeOut ={
    TimeOut?:NodeJS.Timeout,
    loopStart: boolean
}

function useUpdateHook(url:string) {

    const Time:TimeOut = {
        loopStart:false
    }

    function Request(configs:object){
          return axios.post(url,configs)
    }

    const setTime = (config:object) => {
        Time.TimeOut = setTimeout(() => {
            Request(config).then(() => {
                Time.loopStart = false
            });
        }, 2000);
    };

    function clearTime(All=false,configs:object){
           if (!Time.loopStart){
               Time.loopStart  = true
               setTime(configs)
               return;
           }
               clearTimeout(Time.TimeOut)
               if (!All) setTime(configs)

    }

    return {setTime,clearTime,Time}

}

export default useUpdateHook