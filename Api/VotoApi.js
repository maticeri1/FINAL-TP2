import Factory from "../DAOs/Factory.js"
import { MODO } from "../config/config.js"


class VotoApi{
    constructor(){
this.Factory=Factory.factory(MODO)
    }

    create=async({candidato,zona})=>{
        try{
const data= await this.factory.votoDao.create({candidato,zona})
return "Voto cargado"
        }catch(error){throw error}
    }

    getAll=async()=>{
        try{
const votos= await this.factory.votoDao.getAll()
return await votos
        }catch(error){throw error}
    }


}

export default VotoApi