import Factory from "../DAOs/Factory.js"
import { MODO } from "../config/config.js"


class XApi{
    constructor(){
this.Factory=Factory.factory(MODO)
    }

    create=async(info)=>{
        try{
const data= await this.factory.xDao.create(info)
return await data
        }catch(error){throw error}
    }
}

export default XApi