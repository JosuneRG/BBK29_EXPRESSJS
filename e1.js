// Importamos el módulo express
const express = require('express');

// Creamos una app de Express
const app = express();

// Definimos el puerto
const puerto = 3000;

// Iniciamos el servidor
app.listen(puerto, () => {
  // Este mensaje aparece cuando el servidor se levanta correctamente
  console.log(`Servidor levantado en el puerto ${puerto}`);
});