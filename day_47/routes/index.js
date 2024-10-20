const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const data = {
        name: "Home",
        date: "20/10/2024",
        profiles: [
            {name: "Miller", city: "Juiz de Fora", profession: "Desenvolvedor"},
            {name: "Ana", city: "Petrópolis"}, 
            {name: "Marcio", city: "São Paulo", profession: "Analista de Dados"},
        ]
    }
    
    res.render('index', data);
});

module.exports = router;