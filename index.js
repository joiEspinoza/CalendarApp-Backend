const express = require( "express" );
const { dbConnection } = require("./database/dataBaseConfig");
///////--> importaciones

require( "dotenv" ).config();
//////-> configuracion para variables de entorno || process.env 

const appServer = express();
//////--> inicializacion del servidor

const cors = require('cors')
////---> imp CORS seguridad

//*-------------------------------------------------------------------------------------*//

appServer.use( cors() );
//---> CORS

dbConnection();
/////---> BASE DE DATOS

appServer.use( express.json() ); 
///--> lectura y parceo del body -Postman- || no debe ir abajo de las rutas

appServer.listen( process.env.PORT, () => console.log( `Servirdor correindo en puerto ${ process.env.PORT }` ) );
/////--> arranque de servidor


//------------------------------|| Rutas ||-------------------------------// 

appServer.use( express.static("./public") );


appServer.use( "/api/auth", require( "./routes/authRoute" ) );
////-> /api/auth/ + ruta | ej= /api/auth/ |||register|||

appServer.use( "/api/events", require( "./routes/eventsRoute" ) );
////-> /api/events/ + ruta | ej= /api/events/ 

//-----------------------------------------------------------------------// 

