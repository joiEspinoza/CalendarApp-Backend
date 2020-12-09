const express = require( "express" );
//////---> para utilizar libreria

const { validationResult } = require( "express-validator" );
//////---> resultado de validaciones

const Usuario = require( "../models/UsuarioModel" );
/////----> imp del modelo - mongoose

const bcryptjs = require( "bcryptjs" );
/////----> encriptador

const { generarJWT } = require( "../helpers/jsonWebToken" );
/////----> imp JWT

//*******************************************************************************************//

const login = async ( request, response = response ) => 
{
    const { email, password } = request.body;

    try 
    {

        const usuario = await Usuario.findOne( { email } );
        /////-> revisa si el email que se le indica existe en BD

        if( !usuario )
        {
            return response.status( 400 ).json( { ok : false, msg : "email o password no coinciden" } );
        };
        ////////////////////////



        const validPassword = bcryptjs.compareSync( password, usuario.password )
        ////---> confirmar password || booleano

        if( !validPassword )
        {
            return response.status( 400 ).json( { ok : false, msg : "email o password no coinciden" } );
        };
        /////////////////////////

        const jsonWebToken = await generarJWT( usuario.id, usuario.name );
        ////---> generacion del JSON WEB TOKEN

        return response.status( 202 ).json( { ok : true, msg : "Login", uid : usuario.id, name : usuario.name, jsonWebToken } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Favor de hablar con el admin" } );

    };

};

//////

const register = async ( request, response = response ) => 
{

    const { name, email, password } = request.body;

     
    try 
    {
        let usuario = await Usuario.findOne( { email } );
        /////-> revisa si el email que se le indica existe en BD

        if( usuario )
        {
            return response.status( 400 ).json( { ok : false, msg : "El correo de usuario ya existe" } );
        };

        usuario = new Usuario( request.body );

        ///--->Encriptacion de contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt );
        ////////////////////////////////////////////////////////////

        await usuario.save(); 
        ///---> guarda usuario en BD

        const jsonWebToken = await generarJWT( usuario.id, usuario.name );
        ////---> generacion del JSON WEB TOKEN

        response.status( 201 ).json( { ok : true, msg : "Register", uid : usuario.id, name : usuario.name, jsonWebToken } );

    } 
    catch( error ) 
    {

        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Favor de hablar con el admin" } );

    };
   
};

//////

const revalidToken = async ( request, response = response ) => 
{
    const { uid, name } = request;

    const newToken = await generarJWT( uid, name );

    return response.json( { ok : true, msg : "Revalid Token", newToken } )
};

//*******************************************************************************************//

module.exports = { login, register, revalidToken };
//////---> exportaciones
                                                                                                                                  