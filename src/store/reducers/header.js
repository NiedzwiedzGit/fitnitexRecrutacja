import *as actionTypes from '../actions/actionTypes';
const initialState = {
    headerTitles: [
        { title: 'O NAS' },
        { title: 'AKTUALNOŚCI' },
        { title: 'ARTYKULY' },
        { title: 'CETRUM DIAGNOZ' },
        { title: 'NASI SPECJALIŚCI' }
    ]
};

const addHeaderItem = (state, action) => {
    console.log("work");
    return state;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HEADER_ITEM: return addHeaderItem(state, action);
        default: return state;
    }
};
export default reducer;