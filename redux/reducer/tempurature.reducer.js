let initialState = {
    heat: "",
    humudity: ""
}
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_HUMUDITY":
            return Object.assign({}, state, { humudity: action.payload })
            break;
        case "SET_HEAT":
            return Object.assign({}, state, { heat: action.payload})
            break;
        default:
            return state;
    }
}