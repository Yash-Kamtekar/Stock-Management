import { genralstate } from "../gvariable";

const GenralReducer = (state = genralstate, action) => {
    switch (action.type) {
        case "SET_USERDATA":
            state = {
                ...state,
                profile: action.data
            }
            break
        case "SET_ROLE":
            state = {
                ...state,
                roles: action.data
            }
            break

        default:
            state = { ...state }
    }

    return state
}

export default GenralReducer
