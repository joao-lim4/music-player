export const initalState = {
    load: false,
}

export const UserReducer = (state, action) => {

    switch(action.type) {
        case 'load': 
            return{... state, load: action.payload.load}
        break;
        default: 
            return state;
    }
}