const http = require("http");

const tasks = [
  { id: 1, description: "Hacer ejercicio", completed: false },
  { id: 2, description: "Comprar alimentos", completed: true },
  { id: 3, description: "Hacer la tarea", completed: false },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(tasks));
});

server.listen(8000, () => {
  console.log("Servidor en ejecución en el puerto 8000...");
});
