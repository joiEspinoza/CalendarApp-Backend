const { Schema, model } = require( "mongoose" );

/////

const EventSchema = Schema( 
    
    {  
        title : { type : String, required : true },

        notes : { type : String },

        start : { type : Date, required : true },

        end : { type : Date, required : true },

        user : { type : Schema.Types.ObjectId, ref : "Usuario", required : true }
        ///---> referencia al esquema Usuario

    }

);

EventSchema.method( "toJSON", function(){


    const { _id, __v, ...object }  = this.toObject();

    object.id = _id;

    return object;

} );

///----> reemplaza en la VISTA el _id por id y elmina el __v | en base de datos siguen normales


//////

module.exports = model( "Event", EventSchema );