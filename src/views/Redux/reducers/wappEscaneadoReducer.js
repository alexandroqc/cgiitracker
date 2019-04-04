const initState = {
    applications : [
        {
            categories: [],
            confidence: '',
            icon: '',
            name: '',
            version: '',
            website: ''
        }
    ],
    meta: {},
    urls: {}
}

const wappEscaneadoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_WAPP_ESCANEADO':
            return {
              ...state,
              applications: action.applications.applications.map( 
                  app => { return {
                      categories: app.categories,
                      confidence: app.confidence,
                      icon: app.icon,
                      name: app.name,
                      version: app.version,
                      website: app.website
                  } } ),
              meta: action.applications.meta,
              urls: action.applications.urls
            };
        default:
          return state
      }
}

export default wappEscaneadoReducer