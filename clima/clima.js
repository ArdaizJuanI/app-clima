const axios = require('axios')

const getClima = async (lat,lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4f9225ff97100cf3f2a7714fa9fab541&units=metric`)

    const temp=resp.data.main.temp;
    const viento=resp.data.wind.speed;
    const humedad=resp.data.main.humidity;
    
    //destructuracion
    return {temp,
           viento,
           humedad,
           }

}

module.exports = {
    getClima
}
