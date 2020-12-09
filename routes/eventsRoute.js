const { Router } = require( "express" );
const router = Router();
/////-> router

const { validarJWT } = require("../middlewares/ValidarJWTMidd");
//////-> validador JWT

const { check } = require( "express-validator" );
const { ValidatorMidd } = require( "../middlewares/ValidatorMidd" );
const { validatorDate } = require( "../helpers/validatorDate" );
/////-> validador

const { getEvento, crearEvento, actualizarEvento, borrarEvento } = require( "../controlls/eventsControl" );

//************************************************************************************//

router.use( validarJWT );
////---> aplica el middelware a todas las rutas

router.get( "/", getEvento );

router.post( 

    "/",
    [ 
        check( "title", "title is required").not().isEmpty(),
        check( "start", "start date is requires" ).custom( validatorDate ),
        check( "end", "end date is requires" ).custom( validatorDate ),
        ValidatorMidd 
    ],
    crearEvento 
);

router.put( 
    
    "/:id",
    [ 
        check( "title", "title is required").not().isEmpty(),
        check( "start", "start date is requires" ).custom( validatorDate ),
        check( "end", "end date is requires" ).custom( validatorDate ),
        ValidatorMidd 
    ]
    , actualizarEvento 
);

router.delete( "/:id", borrarEvento );



//***********************************************************************************//

module.exports = router;
///--> router no se debe mandar como un objeto