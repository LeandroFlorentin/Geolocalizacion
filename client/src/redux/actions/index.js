import axios from 'axios';
export const MAPA = 'MAPA';

export const traerMapa = () => async dispatch => {
    const mapa = await axios.get('http://localhost:3001/')
    return dispatch({ type: MAPA, payload: mapa.data })
}