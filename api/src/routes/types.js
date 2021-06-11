const { Router } = require('express')
const { getAllTipos } = require("../controllers/types")
const router = Router()

router.get('/', getAllTipos);

module.exports = router;