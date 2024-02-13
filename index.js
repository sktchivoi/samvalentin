import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 80;

// Sirve los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Redirige todas las rutas al index.html
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


