const axios = require('axios')


const getLugarLatLng = async(dir) => {

const encodeUri = encodeURI(dir);
/* console.log(encodeUri); */

const instance = axios.create({
    baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUri}`,
    headers: {'X-RapidAPI-Key':'3c5af222b0msh5366a8af92b8d53p190547jsnf87ccfd9be39'}


})

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR',err);
    }) 

    const resp = await instance.get()

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultado para direccion ${dir}`)
    }
    
    //destructurando
    const data = resp.data.Results[0];
            const direccion = data.name;
            const lat = data.lat;
            const lng = data.lon;

    return {
        direccion,
        lat,
        lng,
    }

}

module.exports={
    getLugarLatLng
}