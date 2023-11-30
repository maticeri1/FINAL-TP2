import XMemoryDao from "./Memory/XMemoryDao.js"


class Factory{
    constructor(){

    }

    static factory=(modo)=>{
        if(modo === "memory"){
return{
xDao:new XMemoryDao(),
userDao:"userMemoryDao"
}
        }
if(modo === "sql"){
    return{
        xDao:"xSqlDao",
        userDao:"userSqlDao"
    }
 }
    if(modo === "mongo"){
        return{
            xDao:"xMongodao",
            userDao:"userMongoDao"
        }
        }
    }
}

export default Factory