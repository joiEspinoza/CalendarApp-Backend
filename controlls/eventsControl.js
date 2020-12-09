const { response } = require( "express" );
const Evento = require( "../models/EventsModel" );

////**********************************************************************************////


const getEvento = async ( request, response = response ) =>
{
    try 
    {
        const eventos = await Evento.find().populate( "user", "name" );
        ///---> entrga un objeto con todos los registros 
        ///---> con populate se puede saber la informacion de quien creo el registro en este casoi entrega id y name si solo se coloca user aparecera toda la informacion del user

        return response.status( 200 ).json( { ok : true, msg : "get Evento", eventos } );

    } 
    catch( error ) 
    {

        console.log( error );

        return response.status( 500 ).json( { ok : false, msg : "favor de contactar al admin" } );

    };
    
};


const crearEvento = async ( request, response = response ) =>
{
    const evento = new Evento( request.body );
    ////---> creacion del evento para la BD

    try 
    {

        evento.user = request.uid;
        ///--> toma el uid del usuario

        const eventoGuardadoBD = await evento.save();

        return response.status( 201 ).json( { ok : true, msg : "crear Evento", evento : eventoGuardadoBD } );

    } 
    catch( error ) 
    {
        console.log( error );

        return response.status( 500 ).json( { ok : false, msg : "favor de contactar al admin" } );

    };
    
};


const actualizarEvento = async ( request, response = response ) =>
{

    try 
    {
        const eventoId = request.params.id;
        //--> saca id de la ruta

        const uid = request.uid;

        const evento = await Evento.findById( eventoId );
        ///---> busca por id

        if( !evento )
        {
            return response.status( 404 ).json( { ok : false, msg : "Evento no encontrado" } );
        };


        const { user } = evento;
        
        if( user.toString() !== uid )
        {
            return response.status( 401 ).json( { ok : false, msg : "usuario no autorizado para editar este evento" } );
        };

        const nuevoEvento = { ...request.body, user : uid };

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new : true /*entrega el nuevo evento*/ } );

        return response.status( 200 ).json( { ok : true, msg : "actualizar Evento", evento : eventoActualizado } );

    } 
    catch( error ) 
    {

        console.log( error );

        return response.status( 500 ).json( { ok : false, msg : "favor de contactar al admin" } );

    };
    
};

const borrarEvento = async ( request, response = response ) =>
{

    try 
    {
        const eventoId = request.params.id;

        const evento = await Evento.findById( eventoId );

        if( !evento )
        {
            return response.status( 404 ).json( { ok : false, msg : "Evento no encontrado" } );
        };

        
        const { user } = evento;
        const uid = request.uid;
    
        if( user.toString() !==  uid )
        {
            return response.status( 401 ).json( { ok : false, msg : "usuario no autorizado para eliminar este evento" } );
        };
        

        const eventoEliminado = await Evento.findByIdAndDelete( eventoId );
        ////-> elimina el evento segun el id
       
        return response.status( 200 ).json( { ok : true, msg : "borrar Evento", evento : eventoEliminado } );
    } 
    catch( error ) 
    {
        
        console.log( error );

        return response.status( 500 ).json( { ok : false, msg : "favor de contactar al admin" } );

    };
    
};


////************************************************************************************///

module.exports = { getEvento, crearEvento, actualizarEvento, borrarEvento };