class XController{
    constructor(){
        
    }

    create=async(req,res)=>{
        try{
res.status(200).send({message:"controller ok"})
        }catch(error){res.status(400).send({message:error.message})}
    }
}

export default XController