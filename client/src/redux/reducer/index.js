import { MAPA } from '../actions'

const initialState = {
    isLoading: true,
    userLocation: undefined,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAPA:
            return {
                ...state,
                mapa: action.payload
            }
        default: return state;
    }
}

export default rootReducer;