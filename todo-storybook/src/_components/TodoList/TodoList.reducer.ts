import { Reducer } from "react";

const reducer: Reducer<boolean, any> = (state, action) => {
    switch(action.type) {
        case "CLOSE":
            return false;
        case "OPEN":
            return true;
        default:
            return !state;
    }
}

export default reducer;