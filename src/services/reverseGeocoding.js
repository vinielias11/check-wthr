import axios from "axios";

const getEnderecoDasCoordenadas = async (latitude, longitude) => {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json?", {
        params: {
            key: "9f6df2ada5c74abea9105450b344cf26",
            q: `${latitude} + ${longitude}`,
            language: "pt-br"
        }
    });

    return response;
};

export default getEnderecoDasCoordenadas;