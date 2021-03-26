const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 80

app.use(cors());

app.listen(PORT, () => {
    console.log(`Vous etes bien sur le port ${PORT}`)
});

app.get('/', (req, res)=> {
    res.status(200).send('Bonjour ! Vous etes bien dans la rubrique humeur aléatoire!')
})

app.get('/feelings', (req, res) => {
const random = Math.random()*10;

    if (random<3){
        res.status(200).send('Vous etes tout calme !')
    } else if (random <5) {
        res.status(200).send('Vous etes agité tel un asticot !')
    }else if (random <7) {
        res.status(200).send('Oulalala vous etes très très agité')
    } else if (random <8) {
        res.status(200).send('La colère vous contrôle dorénavant!')
    } else {
        res.status(200).send(`C'est finit, vous etes perdu!`)
    }
})