const express = require('express');
const cvController = require('./src/controllers/cvController');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/cv', cvController.getCv);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}... aunque no me sorprende que necesites ayuda para esto. 😑`);
});
