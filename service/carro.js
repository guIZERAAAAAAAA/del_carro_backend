import RepositoryCarro from "../repository/carro.js"

class ServiceCarro {

    Buscar( ){
        return RepositoryCarro.find
    }

    Detalhe(id){
        if(!id) {
            throw new Error("Favor infromar o id")
        }
        const carro =  RepositoryCarro.find(id)

        if(!carro) {
            throw new Error (`id  ${id} do carro não encontrado `)
        }
        return carro 
    }

    async Criar(marca, ano ){
        if (! marca || !ano ){
            throw new Error("Favor todos os dados caracteriticas")
            }
            const carro = await RepositoryCarro.Create(marca, ano)

            return carro
    }

   async Alternar(id ,marca, ano ){
        if(!id|| !marca || !ano  ){
            throw new Error("Favor informar os dados ")
        }
        const carroAlterado = await RepositoryCarro.Update(id,marca,ano)
        
        return carroAlterado
    }
    async Deletar(id){
        if (!id){
        throw new Error("favor informar o id")
            const carro = await RepositoryCarro.Delete(id)

            }
            return id
        }
}
export default new ServiceCarro()