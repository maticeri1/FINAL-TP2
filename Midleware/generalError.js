const generalError=(req,res,next)=>{
res.status(404).send("Not found")
}

export default generalError