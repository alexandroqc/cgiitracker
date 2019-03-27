const initState = {
  sitiosweb: [
    { id: "1", netloc: "agetic.gob.bo", path: "/", scheme: "https:" },
    { id: "2", netloc: "agetic.gob.bo", path: "/cv/", scheme: "http:" }
  ]
};

const sitioWebReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SITIO_WEB":
        return [
          ...state,
          action.sitioweb
        ];
    default:
      return state     
  }
};

export default sitioWebReducer;