export const initialState = {
    containers: [],
    users: [],
    user: "",
    usertype : "",
    requests: [],
    req :[],
    user_token: "",
    userName : "",
    depocode : "",
    results : ""
}



export const actionTypes = {
    SET_CONTAINERS: "SET_CONTAINERS",
    SET_USER: "SET_USER",
    SET_USERTYPE: "SET_USERTYPE",
    SET_USERS: "SET_USERS",
    SET_REQUESTS: "SET_REQUESTS",
    SET_CUSTREQUEST:"SET_CUSTREQUEST",
    SET_USER_TOKEN: "SET_USER_TOKEN",
    REMOVE_USER: "REMOVE_USER",
    SET_USERNAME : "SET_USERNAME", 
    SET_DEPOCODE : "SET_DEPOCODE",
    SET_DETAILS : "SET_DETAILS" 
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
        case actionTypes.SET_USERTYPE:
            return {
                ...state,
                usertype: action.usertype
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
        case actionTypes.SET_USERNAME:
            return { 
                ...state,
                userName: action.userName
                }  
        case actionTypes.SET_USERNAME:
            return { 
                 ...state,
                depocode: action.depocode
                    }
                    case actionTypes.SET_DETAILS:
                        return { 
                             ...state,
                            results: action.results
                                }              
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                containers: [],
                users: [],
                user: "",
                email: "depoadmin@me.com",
                requests: [],
                req :[],
                user_token: "",
                userName : "",
                depocode : "",
                results : ""
            }    
        default:
            return state;
    }
}

export default reducer;