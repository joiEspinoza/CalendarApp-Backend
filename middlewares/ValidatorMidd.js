const { response } = require( "express" );
const { validationResult } = require( "express-validator" );

//////

const ValidatorMidd = ( request, response = response, next ) =>
{

    /////-> manejo de errores
    const errors = validationResult( request );

    if( !errors.isEmpty() )
    {
        return response.status( 400 ).json( { ok : false, errors : errors.mapped() } )
    };
    /////-> manejo de errores

    next();
};

//////

module.exports = { ValidatorMidd };