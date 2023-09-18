function getLastObject(propNames:string[],data:any){
    let LastObject = data
    propNames.forEach((item) =>{
        if (LastObject[item]) {
            LastObject = LastObject[item]
        }
    })
    return LastObject
}


export default getLastObject