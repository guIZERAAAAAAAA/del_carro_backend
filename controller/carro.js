import ServiceCarro from "../service/carro.js"

class ControllerCarro {



    async Buscar(_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.status(500).send({ message: carros })
        } catch (error) {
            res.status(500).send({
                message: error.message
            }
            )
        }
    }
    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.find(id)

            res.status(200).send ({message : carro})
        } catch (error) {
            res.status(500)
             ({message:error.Detalhe})

        }
    }


    async Criar(req, res) {
        try {

            const { marca, ano } = req.body

            await ServiceCarro.Criar(marca,ano)

            res.status(201).send({message : "Cadastrado com sucessor "})
        } catch (error) {
            res.status(500).send({
                message : error.message
            })
        }
    }



    Alternar(req, res) {
        try {

        } catch (error) {

        }
    }




    Deletar(req, res) {
        try {

        } catch (error) {

        }
    }



}
export default new ControllerCarro