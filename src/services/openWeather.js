import axios from "axios";

const getTemperatura = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: 35,
            lon: 139,
            appid: "659ba325765fe7e12ae5d67e700aefe9",
            units: "metric"
        }
    });

    return response;
}

export default getTemperatura;