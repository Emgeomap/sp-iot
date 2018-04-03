import {MyStore} from '../Store';
export function Set_Heat(heat) {
    MyStore.dispatch({
        type: "SET_HEAT",
        payload: { heat }
    })
}
export function Set_Humudity(humudity) {
    MyStore.dispatch({
        type: "SET_HUMUDITY",
        payload: { humudity }
    })
}
