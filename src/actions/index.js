
import axios from "axios"

export const getEstados = () => {
    return async dispatch => {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        dispatch({
            type: "GET_ESTADOS",
            estados: response.data
        })
    }
}

export const getMunicipios = (estadoId) => {
    return async dispatch => {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
        dispatch({
            type: "GET_MUNICIPIOS",
            municipios: response.data
        })
    }
}

export const getDistritos = (municipioId) => {
    console.log(municipioId)
    return async dispatch => {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipioId}/distritos`)

        dispatch({
            type: "GET_DISTRITOS",
            distritos: response.data
        })
    }
}