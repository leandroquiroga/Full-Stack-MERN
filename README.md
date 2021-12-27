# Todo List - Full-Stack MERN 📝
Este proyecto fue realizado con MongoDB, Express, Node.js y React.js (MERN). En este proyecto podemos tener nuestras tareas mejor organizadas, de tal manera que se nos queda guarda en una base de datos. Podemos realizar las 4 operaciones basicas CRUD (Create, Read, Update and Delete ). <br><br>
Mediante un formulario realizamos la primera operacion basica (Create) pero antes cumplir con los requisitos previos que es TODOS los campos deben estar completos <br>
### Validacion


https://user-images.githubusercontent.com/80013958/147423551-0938f363-7ded-4914-95ed-c702bf882560.mp4


Luego una vez cargado los datos nuevos los envia a la base de datos para ser leidos (READ) y mostralos en forma de card en nuestras pantallas. <br>
### Envio de datos

https://user-images.githubusercontent.com/80013958/147423562-e6faa9fd-5a94-4d69-8097-606a84a3fb0b.mp4



Cuando decimos que podemos editar es solo para editar si la tarea fue completada o no <br>

### Manipular el estado de la tarea   


https://user-images.githubusercontent.com/80013958/147423576-fb9c1274-b20b-4d19-94b2-9a45ca00b201.mp4


De esta manera podemos eliminarla tanto sea de la UI y la base de datos. <br> 

https://user-images.githubusercontent.com/80013958/147423594-6e561d03-bbd8-421d-b408-d5b8d15aa2c7.mp4



# Construido con 🛠️
* React.js
* Node.js
* Express.js
* Mongo DB
* Bootstrap
* SweerAlert2
* Axios
* Moment.js


# Funcionalidades ⚙️
Esta aplicacion se divide en dos partes por un lado el Backend con toda la logica para hacer funcionar el servidor y conectarse a la base de datos y luego el Frontend que es para mostrar los datos a usuario

## Backend 👨🏻‍💻
En el Backend fue realizado con express para el servidor, mongoose para la conexion con la base de datos, dontenv para las variales de entorno y nodemom para que el seridor detecte un cambio automaticamente. En esta carpetas podemos encontrar los Routers, Controlllers, Middelwares ,Models y la el schema de la Base de Datos. Al descargar esta carpeta debemos ejecutar los siguientes scripts

### `npm run dev`

Si estamos en modo desarrollo debemos ejecutar este script de esta manera nodemon actua automanticamente al detectar un cambio
Desde este link podemos ver los datos en tiempo real :[http://localhost:4000/task](http://localhost:4000).

### `npm run start`

En este caso es para el modo produccion y poder subirlo a un hosting como Heroku (por ejemplo)

## Frontend 💻
El Frontend fue realizado con React.js para consumir la API de nuestro propio servidor mediante los verbos http (GET, PUT, DELETE, POST), ademas podemos crear nuestras propias tareas mediante un simple formulario, este formulario se ayuda de Axios para hacer la accion de guardar la informacion a la base de datos. Tambien podemos encontrar la logica para mostrear los Componentes, hablando de componentes podemos encontrar 3 Componentes principales, en la que estos compenentes tiene su propios componentes, solamente para separar mejor el codigo. 


### `npm start`

Para correr la aplicacion en modo desarrollo ejecutamos este script, una vez ejecutado abre en nuestro navegador el siguiente link [http://localhost:3000](http://localhost:3000).

### `npm run build`

Para llevarlo a modo produccion podemos ejecutar este script que nos crea una carpta build en donde se encuentra nuestro codigo mas ligero para poder subirlo a un hosting gratuito 

# Posibles mejoras 🚀
* Se puede arregalar el bug que tiene al manipular el boton swich ya que al presionar en una carta se cambia el estado en todas las demas pero desde el lado Frontend ya que desde nuestra bases de datos se actualiza uno solo.
* Crear un componete para mostrarlo cuando no hay datos en la base de datos mostrar alguna informacion indicando que no hay tareas. 
* Hacer un deploy para el servidor y asi poder consumirlo en el frontend


# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
