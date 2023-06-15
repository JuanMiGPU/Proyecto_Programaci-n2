//test para reglas del servidor
// .....................................................................
// .....................................................................
// ........................................................
// mainTest1.js
// ........................................................
var request = require ("request")
var assert = require ("assert")
// ........................................................
// ........................................................
const IP_PUERTO="http://localhost:8080"
// ........................................................
// main ()
// ........................................................

//VARIABLES
var Antonio={codigo:'2',nombre:'Antonio',puntuacion:0}
var ordenador= {codigo:'AC',palabra:'ordenado'}

describe( "Test 1 : Recuerda arrancar el servidor", function() {

    it( "probar que GET /prueba responde ¡Funciona!",function(hecho){
        request.get(
        { url : IP_PUERTO+"/prueba", headers : { "User-Agent" : "jordi" }},
        function( err, respuesta, carga ) {
            assert.equal( err, null, "¿ha habido un error?" )
            assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
            assert.equal( carga, "¡Funciona!", "¿La carga no es ¡Funciona!?" )
            hecho()
        } // callback()
        )//.get
        })//it
    /*it("elimino las palabras existentes", function (hecho){
        request.delete(
            {url: IP_PUERTO+"/palabra",
            headers : { "User-Agent" : "JuanMi" ,"Content-Type": "application/json"},
            body: "Palabra"},
            function( err, respuesta, carga ) {
                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal( carga, "OK", "¿La carga no es OK" )
                hecho()}
        )
    })*/
    it( "probar DELETE /palabra", function( hecho ) {
        request.post(
            { url : IP_PUERTO+"/palabra",
            headers : { "User-Agent" : "JuanMi" ,"Content-Type": "application/json"},
            body: JSON.stringify(ordenador)},
          function( err, respuesta, carga ) {
                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal( carga, "OK", "¿La carga no es OK" )
                hecho()
          } // callback

        )//.get
        })//it  
        // ....................................................
        // ....................................................
    it( "probar POST /palabra", function( hecho ) {
        request.post(
            { url : IP_PUERTO+"/palabra",
            headers : { "User-Agent" : "JuanMi" ,"Content-Type": "application/json"},
            body: JSON.stringify(ordenador)},
          function( err, respuesta, carga ) {
                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal( carga, "OK", "¿La carga no es OK" )
                hecho()
          } // callback

        )//.get
        })//it
    // ....................................................
    /*request.post(
        { url : IP_PUERTO+"/alta",
        headers : { "User-Agent" : "jordi", "Content-Type" : "application/json" },
        body : JSON.stringify( datosPersona )
      }, */
    // ....................................................
    it( "probar POST /persona", function( hecho ) {
        request.post(
            { url : IP_PUERTO+"/persona",
            headers : { "User-Agent" : "JuanMi" },
            body: JSON.stringify(Antonio)},
          function( err, respuesta, carga ) {
                  assert.equal( err, null, "¿ha habido un error?" )
                  assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                  var solucion = JSON.parse( carga )
                  //assert.equal( solucion.longitud, 4, "¿La longitud no es 4?" )
                  hecho()
          } // callback

        )//.get
        })//it
    // ....................................................
    // ....................................................
    /*it( "probar GET /dividir", function( hecho ) {
        request.get(
            { url : IP_PUERTO+"/dividir?a=10&b=2.5",
                  headers : { "User-Agent" : "jordi" }},
                function( err, respuesta, carga ) {
                        assert.equal( err, null, "¿ha habido un error?" )
                        assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                        var solucion = JSON.parse( carga )
                        assert.equal( solucion.division, 4, "¿El cociente es no es 4?" )
                        hecho()
                }//calback
        )//.get
    })//it
    // ....................................................
    // ....................................................
    it( "probar POST /alta", function( hecho ) {

        var datosPersona = { dni : "34567A", nombre : "Pepe", apellidos : "García Pérez"}
    request.post(
        { url : IP_PUERTO+"/alta",
        headers : { "User-Agent" : "jordi", "Content-Type" : "application/json" },
        body : JSON.stringify( datosPersona )
      }, 
        function( err, respuesta, carga ) {
            //console.log(err)
            assert.equal( err, null, "¿ha habido un error?" )
            assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
            assert.equal( carga, "OK", "¿La carga no es OK" )
            hecho()
        } // callback
    )//.post

    })//it
    it ("probar GET /persona/:dni", function (hecho){
        /*var datosPersona = { dni : "12345A", nombre : "Pepe", apellidos : "García Pérez"}
        request.post(
        { url : IP_PUERTO+"/alta",
            headers : { "User-Agent" : "jordi", "Content-Type" : "application/json" },
            body : JSON.stringify( datosPersona )
        })
        request.get(
            { url : IP_PUERTO+"/persona/34567A",
                  headers : { "User-Agent" : "jordi" }},
                function( err, respuesta, carga ) {
                        assert.equal( err, null, "¿ha habido un error?" )
                        assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                        //console.log(carga)
                        //console.log(respuesta)
                        var solucion = JSON.parse(respuesta.body )
                        //assert.equal( solucion, 4, "¿El cociente es no es 4?" )
                        hecho()
                        console.log(solucion)
                }//calback
        )//.get
    })*/


})
