const initState = {
    applications : [
        {
            id: '',
            name: '',
            confidence: '',
            version: '',
            icon: '',
            web_site: '',
            categories: []
        }
    ],
    id: '',
    uri: ''
}

const detalleSitioWebReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DETALLE_SITIO_WEB':
            return {
              ...state,
              applications: action.applications.applications,
              id: action.applications.id,
              uri: action.applications.uri
            };
        default:
          return state
      }
}

export default detalleSitioWebReducer