//aquí se maneja la lógica de la conexión - el servidor de la API 
//primero se importará la librería de express

const express = require("express");

//se guardan en la constante app todos los metodos de express
const app = express();

//creación del puerto
const port = 1098;
const apiRoute = "/users.api"

const userRoute = require("./routes/userRoute.js");

//para acceder a la información
app.use(express.json());
app.use(apiRoute, userRoute);

app.listen(port, () => {console.log("El servidor se ejecuta en el http://localhost: ", + port)});

//En resumen, el archivo main.js define la aplicación Express y establece las rutas que utilizarán los diferentes métodos HTTP. Las rutas se definen en el archivo routes/userRoutes.js, que a su vez importa los controladores que se definen en controllers/userController.js. Este controlador utiliza el modelo de usuario definido en models/userModel.js para interactuar con la base de datos.