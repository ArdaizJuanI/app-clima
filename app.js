const axios = require('axios')

const lugar = require ('./Lugar/lugar')
const clima = require ('./clima/clima')




const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv
//console.log(argv.direccion);


const getInfo = async (direccion) => {

    //salida

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng)
        return (`La temperatura de ${coords.direccion} es de ${temp.temp} grados, la velocidad del viento es de ${temp.viento} km/h y hay una humedad del ${temp.humedad}%`)

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }   



    
}
getInfo(argv.direccion)
.then (console.log)
.catch (console.log)


/* lugar.getLugarLatLng(argv.direccion)

    .then(console.log) */

/* clima.getClima(-32.4886188,-58.223469)
.then(console.log)    
.catch(console.log) */


