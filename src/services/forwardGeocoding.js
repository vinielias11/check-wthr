import axios from "axios";
import chaves from "./chaves";

const getCoordenadasDoEndereco = async (endereco) => {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json?", {
        params: {
            key: chaves.openCage,
            q: endereco,
            language: "pt-br"
        }
    });

    return response;
};

export default getCoordenadasDoEndereco;