class VotoMemoryDao {
    constructor(){
        this.memory=[]
    }

    create=async({candidato,zona})=>{
        try{
this.memory.push({candidato,zona})
return "Voto cargado"
        }catch(error){throw error}
    }

    getAll=async()=>{
        const votos={A:0,B:0,C:0,Blanco:0}
        try{
            this.memory.forEach((e) => {
                if (e.candidato === "candidatoA") {
                  votos.A++;
                }
                if (e.candidato === "candidatoB") {
                  votos.B++;
                }
                if (e.candidato === "candidatoC") {
                  votos.C++;
                }
                if (e.candidato === "enBlanco") {
                  votos.Blanco++;
                }
              });
return votos
        }catch(error){throw error}
    }

}

export default VotoMemoryDao