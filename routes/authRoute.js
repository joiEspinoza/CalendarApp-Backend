const { Router } = require( "express" );
const router = Router();
///----> inicializacion router de express

const { check } = require( "express-validator" );
///-----> Midelware de expressValidator

const { login, register, revalidToken } = require( "../controlls/authControl" );
///---> exportaciones de funciones en authControl

const { ValidatorMidd } = require("../middlewares/ValidatorMidd");
////---> imp custom middleware

const { validarJWT } = require( "../middlewares/ValidarJWTMidd" );
////--> imp revalidador jwt


//--------------------------|| Creacion Rutas - ENDPoints ||---------------------------//

router.post( 
    
    "/", 
    [ 
        check( "email", "email is required" ).isEmail(), 
        check( "password", "min password 6 characters").isLength( { min : 6 } ),
        ValidatorMidd
    ],
    login );

////--> ruta login

router.post( 
    
    "/register",
    [ 
        check( "name", "name is require" ).not().isEmpty(),
        check( "email", "email is require" ).isEmail(),
        check( "password", "password min 6 characters" ).isLength( { min : 6 } ),
        ValidatorMidd

    ],
    register 
);

////--> ruta register

router.get( "/revalidtoken", [ validarJWT ], revalidToken );
////--> ruta revalidToken

//------------------------------------------------------------------------------------//

module.exports = router;
//---> exportacion en express