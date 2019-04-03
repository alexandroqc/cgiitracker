const initState = {
    applications : [],
    meta: {},
    urls: {}
}


const wappEscaneadoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_WAPP_ESCANEADO':
            // console.log(action.token);
            return {
              ...state,
              applications: action.applications,
              meta: action.meta,
              urls: action.urls

            //   {
            //       login: action.token
            //   }
            //   action.updates
            };
        default:
          return state
      }
}

export default wappEscaneadoReducer