// .....................................................................
// ReglasREST.js
// .....................................................................
module.exports.cargar = function(servidorExpress, laLogica){
    
    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get("/prueba/", function( peticion, respuesta ){
        console.log( " * GET /prueba " )
        respuesta.send( "¡Funciona!" )
    }) // get /prueba
    // .......................................................
    // GET /dividir?a=<num>&b=<num>
    // .......................................................
    /*servidorExpress.get(
        "/dividir",
        function( peticion, respuesta ){
                console.log( " * GET /dividir " )
                var a =peticion.query.a
                var b= peticion.query.b
                if( isNaN(a) || isNaN(b) || b == 0 ) {
                    // si a o b no son números, o b es 0
                    // no se puede dividir
                    // (400 = bad request)
                    respuesta.status(400).send(" no puedo dividir ");
                    return
                }
                var solucion = {a:a, b:b, division: a/b}
                respuesta.send(JSON.stringify(solucion))
            })//get /dividir*/
    // .......................................................
    // POST /alta   
    // .......................................................
    servidorExpress.delete(
        "/palabra",
        async function (peticion, respuesta){
            console.log(" * DELETE/ palabra")
            console.log(peticion.body)
            var datos= JSON.parse(peticion.body)
            console.log("Soy datos:   "+ datos)
            await laLogica.borrarFilasDE(datos)
            respuesta.send ("OK")
        }
    )  
    servidorExpress.post(
        "/palabra",
        async function( peticion, respuesta ){
                console.log( " * POST /palabra " )
                console.log(peticion.body)
                var datos = JSON.parse( peticion.body )
                console.log(datos)
                //console.log( datos.codigo )
                //console.log( datos.palabra )
                //console.log(datos)
                await laLogica.insertarPalabra(datos)
                // supuesto procesamiento
                respuesta.send( "OK" )
        })//post/palabra
    // .......................................................
    // POST /alta   
    // .......................................................
    servidorExpress.post(
        "/persona",
        async function( peticion, respuesta ){
                console.log( " * POST /persona " )
                var datos = JSON.parse( peticion.body )
                console.log(datos.codigo )
                console.log(datos.nombre )
                console.log(datos.puntuacion)
                //console.log(datos)
                await laLogica.insertarPersona(datos)
                // supuesto procesamiento
                respuesta.send( "OK" )
        })

    //regla GET /persona/:dni
    servidorExpress.get("/persona/:nombre", 
        async function (peticion, respuesta){
            //averiguo el codigo
            var codigo =peticion.params.nombre
            //console.log(dni)
            //llamo a la función adecuada de la lógica
            var res= await laLogica.buscarPersonaConCodigo(codigo)
            //console.log("soy res " + res)
            if(res.length ==0){
                //404: not found
                respuesta.status(404).send("no encontré dni: " + dni)
                return
            }//if
            respuesta.send(JSON.stringify(res[0]))
            //console.log(JSON.stringify(res[0]+"res[0]"))
        })
    servidorExpress.post("/persona/puntuacion",
            async function (peticion, respuesta){
                //averiguo el codigo
                var persona =peticion.params.persona
                //console.log(dni)
                //llamo a la función adecuada de la lógica
                await laLogica.modificarPuntuacion(persona)
                //console.log("soy res " + res)
                /*if(res.length ==0){
                    //404: not found
                    respuesta.status(404).send("no encontré persona: " + persona.codigo)
                    return
                }//if
                respuesta.send(JSON.stringify(res[0]))
                //console.log(JSON.stringify(res[0]+"res[0]"))*/
        })
}//()