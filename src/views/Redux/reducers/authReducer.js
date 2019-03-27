const initState = {
    token : '',
    login: {
        token: ''
    }
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_AUTH":
            return [
              ...state,
              action.updates
            ];
        default:
          return state     
      }
}

export default authReducer