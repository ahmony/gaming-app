import axios from "axios";

export const getGames = async () =>
    {
        return axios.get('https://rawg.io/api/games?key=873668b4248e462cb16ef5e138945339')
            .then(resp => resp.data.results)
            .then(user => ({ type: 'GET_DATA', payload: user }))
            .catch((err: any) => ({ type: 'GET_ERROR', payload: err }))
    };

export const searchGames = async (query: string) =>
    {
        return axios.get(`https://rawg.io/api/games?search=${query}&key=873668b4248e462cb16ef5e138945339`)
            .then(resp => resp.data.results)
            .then(user => ({ type: 'GET_DATA', payload: user }))
            .catch((err: any) => ({ type: 'GET_ERROR', payload: err }))
    };

export const getDetails = async (id: number) => {
        return axios.get(`https://rawg.io/api/games/${id}?key=873668b4248e462cb16ef5e138945339`)
            .then(resp => resp.data)
            .then(user => ({ type: 'GET_DETAILS', payload: user }))
            .catch((err: any) => ({ type: 'GET_ERROR', payload: err }))
};

export const getScreenshoots = async (name: string) => {
        return axios.get(`https://api.rawg.io/api/games/${name}/screenshots?key=873668b4248e462cb16ef5e138945339`)
            .then(resp => resp.data)
            .then(user => ({ type: 'GET_SCREENSHOOTS', payload: user }))
            .catch((err: any) => ({ type: 'GET_ERROR', payload: err }))
};

export const getTrailers = async (id: number) => {
    return axios.get(`https://rawg.io/api/games/${id}/movies?key=873668b4248e462cb16ef5e138945339`)
            .then(resp => resp.data)
            .then(user => ({ type: 'GET_TRAILERS', payload: user }))
            .catch((err: any) => ({ type: 'GET_ERROR', payload: err }))
}