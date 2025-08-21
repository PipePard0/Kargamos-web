const http = require("http");
const fs = require("fs");
const path = require("path");

// Crear servidor
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
        res.end("Error interno del servidor");
    } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
    }
  });
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});