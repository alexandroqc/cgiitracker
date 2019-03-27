export const createSitioWeb = sitioweb => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_SITIO_WEB", sitioweb });
  };
};
