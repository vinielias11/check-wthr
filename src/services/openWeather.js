import axios from "axios";
import chaves from "./chaves";

const getTemperatura = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: 35,
            lon: 139,
            appid: chaves.openWeather,
            units: "metric"
        }
    });

    return response;
}

export default getTemperatura;