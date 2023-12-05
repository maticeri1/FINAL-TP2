import VotoMemoryDao from "./Memory/VotoMemoryDao.js"


class Factory{
    constructor(){

    }

    static factory=(modo)=>{
        if(modo === "memory"){
return{
votoDao: new VotoMemoryDao(),
userDao: "userMemoryDao"
}
        }

    }
}

export default Factory