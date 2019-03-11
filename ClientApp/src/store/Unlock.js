import delay from 'await-delay';

const UNLOCK_START = 'UNLOCK_START';
const UNLOCK_END = 'UNLOCK_END';
const initialState = {loading: false};

export const actionCreators = {
    startUnlock: () => async(dispatch, getState) => {
        dispatch({type: UNLOCK_START});

        const url = `api/SampleData/Unlock`;
        const response = await fetch(url, {
            method: 'PUT'
        });
        //await delay(5000);
        dispatch({type: UNLOCK_END});
    } 
};

export const reducer  = (state, action) => {
    state = state || initialState;

    if(action.type === UNLOCK_START) {
        return{...state, loading: true};
    }

    if(action.type === UNLOCK_END){
        return{...state, loading: false};
    }

    return state;
}