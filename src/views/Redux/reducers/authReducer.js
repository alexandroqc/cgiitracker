const initState = {
    login: {
        token: ''
    }
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_AUTH':
            console.log(action.token);
            return {
              ...state,
              login: action.token
            //   {
            //       login: action.token
            //   }
            //   action.updates
            };
        default:
          return state
      }
}

export default authReducer