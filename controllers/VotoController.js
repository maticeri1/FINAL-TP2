import VotoApi from "../Api/VotoApi.js"

class VotoController{
    constructor(){
        this.votoApi = new VotoApi()
    }

    create=async(req,res)=>{
        try{
            const {candidato}=req.body
            const {zona} = req.body
            if((candidato !== "candidatoA" && candidato !== "candidatoB" && candidato !== "candidatoC" && candidato !== "enBlanco") && (zona !== "zona1" && zona !== "zona2" && zona !== "zona3" && zona !== "zona4"))
            { throw new Error( "candidato no válido y zona no correspondiente" )}
if(candidato !== "candidatoA" && candidato !== "candidatoB" && candidato !== "candidatoC" && candidato !== "enBlanco"){
    throw new Error( "candidato no válido" )
}
if(zona !== "zona1" && zona !== "zona2" && zona !== "zona3" && zona !== "zona4"){
    throw new Error( "zona no correspondiente" )
}
             await this.votoApi.create({candidato,zona})
res.status(200).send("voto cargado")
        }catch(error){res.status(422).send({message:error.message})}
    }

    getAll=async(req,res)=>{
        try{
            const votos = await this.votoApi.getAll()
res.status(200).send({generales: {candidatoA:votos.A , candidatoB:votos.B, candidatoC: votos.C, enblanco: votos.Blanco}})
        }catch(error){res.status(422).send({message:error.message})}
    }


}

export default VotoController