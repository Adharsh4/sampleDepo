export const initialState = {
    containers: [],
    users: [],
    user: "",
    email: "depoadmin@me.com",
    requests: [],
    req :[],
    user_token: ""
}



export const actionTypes = {
    SET_CONTAINERS: "SET_CONTAINERS",
    SET_USER: "SET_USER",
    SET_EMAIL: "SET_EMAIL",
    SET_USERS: "SET_USERS",
    SET_REQUESTS: "SET_REQUESTS",
    SET_CUSTREQUEST:"SET_CUSTREQUEST",
    SET_USER_TOKEN: "SET_USER_TOKEN"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CONTAINERS:
            return {
                ...state,
                containers: action.containers
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case actionTypes.SET_USERS:
            return { 
                ...state,
                users: action.users
            }
        case actionTypes.SET_REQUESTS:
            return {
                ...state,
                requests: action.requests 
            }    
        case actionTypes.SET_CUSTREQUEST:
            return { 
                ...state,
                req: action.req
            }     
        case actionTypes.SET_USER_TOKEN:
            return { 
                ...state,
                user_token: action.user_token
            }      
        default:
            return state;
    }
}

export default reducer;