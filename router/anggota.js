const express = require("express")
const anggotaController = require("../controller/anggotaController")
const routeAnggota = express.Router()

routeAnggota.post('/', anggotaController.create)
routeAnggota.get('/get', anggotaController.getAll)
routeAnggota.get('/get/:id', anggotaController.getById)
routeAnggota.put('/update/:id', anggotaController.update)
routeAnggota.delete('/delete/:id', anggotaController.delete)

module.exports = routeAnggota