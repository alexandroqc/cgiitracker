const sitiosWebDefaultState = [];

export default (state = sitiosWebDefaultState, action) => {
  switch (action.type) {
    case "ADICIONAR_SITIO_WEB":
      return [
        ...state,
        action.sitioweb
      ];
    // return [
    //   ...state,
    //   action.sitioweb
    // ];
    default:
      return state;
  }
};
