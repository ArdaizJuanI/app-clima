const axios = require('axios')

const getClima = async (lat,lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4f9225ff97100cf3f2a7714fa9fab541&units=metric`)

    //destructuracion
    return resp.data.main.temp

}

module.exports = {
    getClima
}