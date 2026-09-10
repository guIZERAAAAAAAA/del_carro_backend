import express from "express"
import controllerCarrinho from "../controller/carrinho.js"
const router = express.Router()

router.get("/Buscar",controllerCarrinho.Buscar)
router.get("/Detalhe/:id",controllerCarrinho.Detalhe)
router.post("/Criar",controllerCarrinho.Criar)
router.put("Alternar/:id" , controllerCarrinho.Alternar)
router.delete("/deletar/:id", controllerCarrinho.Deletar)

export default router