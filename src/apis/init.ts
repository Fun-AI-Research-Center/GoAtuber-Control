import axios from "axios";

export default async function getInitData(){

   return  axios({
        url:"/init",
        method:"get"
    })

}



