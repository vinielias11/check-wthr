import axios from "axios";
import chaves from "./chaves";

const getEnderecoDasCoordenadas = async (latitude, longitude) => {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json?", {
        params: {
            key: chaves.openCage,
            q: `${latitude} + ${longitude}`,
            language: "pt-br"
        }
    });

    return response;
};

export default getEnderecoDasCoordenadas;