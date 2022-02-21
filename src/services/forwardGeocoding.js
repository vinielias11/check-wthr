import axios from "axios";

const getCoordenadasDoEndereco = async (endereco) => {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json?", {
        params: {
            key: "9f6df2ada5c74abea9105450b344cf26",
            q: endereco,
            language: "pt-br"
        }
    });

    return response;
};

export default getCoordenadasDoEndereco;