import XApi from "../Api/xApi.js"



class XController{
    constructor(){
        this.XApi = new XApi()
    }

    create=async(req,res)=>{
        try{
            const {info}=req.body
            const data = await this.XApi.create(info)
res.status(200).send({message:data})
        }catch(error){res.status(400).send({message:error.message})}
    }
}

export default XController